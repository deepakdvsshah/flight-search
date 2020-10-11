export type Action = | GetFlightList | GetFlightListFail

export enum SearchFlightActionType {
    GET_FLIGHT_LIST = '[Flight] Get flight list ',
    GET_FLIGHT_LIST_FAIL = '[Flight] Get flight list fail ',
}

export class GetFlightList {
    static readonly type = SearchFlightActionType.GET_FLIGHT_LIST;
    constructor(public payload: any) {
    }
}
export class GetFlightListFail {
    static readonly type = SearchFlightActionType.GET_FLIGHT_LIST_FAIL;
    constructor(public err: any) {
    }
}