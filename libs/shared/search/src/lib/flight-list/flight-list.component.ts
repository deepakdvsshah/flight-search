import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FlightSearchState, FlightSearchStateModel } from '../+state/search.state';

@Component({
  selector: 'flight-search-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent {
  @Select(FlightSearchState.getFailSearch) searchFail$: Observable<FlightSearchStateModel>;
  @Input() flightLists: any;
  constructor() { }


}
