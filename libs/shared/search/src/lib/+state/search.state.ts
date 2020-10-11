import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { GetFlightList, GetFlightListFail } from '../+state/search.action';
import { Injectable } from '@angular/core';
import { FlightDestinationsService } from '@openapi/flightSearch'
import { catchError, tap } from 'rxjs/operators';

export class FlightSearchStateModel {
    flightList: [];
    FlightSearchFail: any
}

@State<FlightSearchStateModel>({
    name: 'addProduct',
    defaults: {
        flightList: [],
        FlightSearchFail: ''
    }
})
@Injectable()
export class FlightSearchState {

    constructor(public flightDestinationsService: FlightDestinationsService, private store: Store) {
    }

    /**
    * @param  {FlightSearchStateModel} 
    * return add product
    */
    @Selector()
    static getFlightList(state: FlightSearchStateModel) {
        return state.flightList;
    }
    /**
    * @param  {FlightSearchStateModel} 
    * return add product
    */
    @Selector()
    static getFailSearch(state: FlightSearchStateModel) {
        return state.FlightSearchFail;
    }




    /**
     * Selected product details
     */
    @Action(GetFlightList)
    getFlightList({ getState, setState }: StateContext<FlightSearchStateModel>, { payload }: GetFlightList) {
        return this.flightDestinationsService.getFlightDestinations(payload.origin, payload.departureDate, payload.oneWay, payload.duration, payload.nonStop, payload.maxPrice, payload.viewBy).pipe(tap((result: any) => {
            const state = getState();
            setState({
                ...state,
                flightList: result.data,
                FlightSearchFail: false
            });
        }),
            catchError((err: any) => {
                return this.store.dispatch(new GetFlightListFail(err));
            })
        );
    }
    /**
  * @param  {} actions.RegisterEnrolSuccess
  */
    @Action(GetFlightListFail)
    getFlightListFail(ctx: StateContext<FlightSearchStateModel>, { err }) {
        return ctx.patchState({ FlightSearchFail: err.error.errors[0].detail || err.error.errors[0].title });
    }
}