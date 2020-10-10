import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetFlightList } from '../+state/search.action';
import { Injectable } from '@angular/core';

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

    constructor() {
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
    getFlightList({ getState, setState }: StateContext<FlightSearchStateModel>, { }: GetFlightList) {
        // return this.addProductService.getProductDetails(id).pipe(tap((result: any) => {
        //     const state = getState();
        //     setState({
        //         ...state,
        //         selectedProduct: result.data
        //     });
        // }));
    }
}
