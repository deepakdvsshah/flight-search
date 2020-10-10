export type Action = | GetFlightList

export enum SearchFlightActionType {
    GET_FLIGHT_LIST = '[Flight] Get flight list ',
}

export class GetFlightList {
    static readonly type = SearchFlightActionType.GET_FLIGHT_LIST;
    constructor(public payload: any) {

    }
}