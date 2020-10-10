import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetFlightList } from '../+state/search.action';
import { Injectable } from '@angular/core';
import { FlightDestinationsService } from '@openapi/flightSearch'
import { tap } from 'rxjs/operators';

export class FlightSearchStateModel {
    flightList: [];
}

@State<FlightSearchStateModel>({
    name: 'addProduct',
    defaults: {
        flightList: [],
    }
})
@Injectable()
export class FlightSearchState {

    constructor(public flightDestinationsService: FlightDestinationsService) {
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
     * Selected product details
     */
    @Action(GetFlightList)
    getFlightList({ getState, setState }: StateContext<FlightSearchStateModel>, { payload }: GetFlightList) {
        return this.flightDestinationsService.getFlightDestinations(payload.origin, payload.departureDate, payload.oneWay, payload.duration, payload.nonStop, payload.maxPrice, payload.viewBy).pipe(tap((result: any) => {
            const state = getState();
            setState({
                ...state,
                flightList: result.data
            });
        }));
    }
}
