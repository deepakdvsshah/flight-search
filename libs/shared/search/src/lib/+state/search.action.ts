import { ISearch } from '../model/search.model';

export type Action = | GetFlightList | GetFlightListFail | GetAccessToken

export enum SearchFlightActionType {
    GET_FLIGHT_LIST = '[Flight] Get flight list ',
    GET_FLIGHT_LIST_FAIL = '[Flight] Get flight list fail ',
    ACCESS_TOKEN = '[Flight] Get access token ',
}

export class GetFlightList {
    static readonly type = SearchFlightActionType.GET_FLIGHT_LIST;
    constructor(public payload: ISearch) {
    }
}
export class GetFlightListFail {
    static readonly type = SearchFlightActionType.GET_FLIGHT_LIST_FAIL;
    constructor(public err: any) {
    }
}
export class GetAccessToken {
    static readonly type = SearchFlightActionType.ACCESS_TOKEN;
    constructor() {
    }
}