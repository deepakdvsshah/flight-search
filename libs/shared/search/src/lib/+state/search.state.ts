import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { GetAccessToken, GetFlightList, GetFlightListFail } from '../+state/search.action';
import { Injectable } from '@angular/core';
import { FlightDestinations, FlightDestinationsService } from '@openapi/flightSearch'
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


export class FlightSearchStateModel {
    flightList: Array<object>;
    flightSearchFail: string | boolean;
    accessToken: string
}

@State<FlightSearchStateModel>({
    name: 'addProduct',
    defaults: {
        flightList: [],
        flightSearchFail: '',
        accessToken: ''
    }
})
@Injectable()
export class FlightSearchState {

    constructor(public flightDestinationsService: FlightDestinationsService, private http: HttpClient, private store: Store) {
    }

    /**
    * @param  {FlightSearchStateModel} 
    * return flight list
    */
    @Selector()
    static getFlightList(state: FlightSearchStateModel) {
        return state.flightList;
    }
    /**
    * @param  {FlightSearchStateModel} 
    * return error messages
    */
    @Selector()
    static getFailSearch(state: FlightSearchStateModel) {
        return state.flightSearchFail;
    }
    /**
    * @param  {FlightSearchStateModel} 
    * return error messages
    */
    @Selector()
    static getToken(state: FlightSearchStateModel) {
        return state.accessToken;
    }


    /**
     * Get flight list based on search
     */
    /**
     * @Action  GetFlightList
     * @param  {} {payload}
     */
    @Action(GetFlightList)
    getFlightList({ getState, setState }: StateContext<FlightSearchStateModel>, { payload }: GetFlightList) {
        return this.flightDestinationsService.getFlightDestinations(payload.origin, payload.departureDate, payload.oneWay, payload.duration, payload.nonStop, payload.maxPrice, payload.viewBy).pipe(tap((result: FlightDestinations) => {
            const state = getState();
            setState({
                ...state,
                flightList: result.data,
                flightSearchFail: false
            });
        }),
            catchError((err: any) => {
                return this.store.dispatch(new GetFlightListFail(err));
            })
        );
    }
    /**
     * @Action   GetFlightListFail
     * @param  {} {err}
     */
    @Action(GetFlightListFail)
    getFlightListFail(ctx: StateContext<FlightSearchStateModel>, { err }) {
        return ctx.patchState({ flightSearchFail: err.error.errors[0].title || err.error.errors[0].detail });
    }
    /**
     * @Action   GetFlightListFail
     * @param  {} {err}
     */
    @Action(GetAccessToken)
    GetAccessToken(ctx: StateContext<FlightSearchStateModel>, { err }) {
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        let body = new HttpParams();
        body = body.set('grant_type', 'client_credentials');
        body = body.set('client_id', 'LZkyphaSlmUXlOby2SFleO4hZYBOAXlS');
        body = body.set('client_secret', 'SXjogKT83jGmA3jH');
        this.http.post<any>('https://test.api.amadeus.com/v1/security/oauth2/token', body, {
            headers: headers
        }).subscribe(data => {
            ctx.patchState({
                accessToken: data.access_token
            });
            localStorage.setItem('token', data.access_token);
        });
    }
}