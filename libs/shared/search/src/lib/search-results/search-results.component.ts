import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ISearchFilter } from '../model/search-filter.model';
import { Select } from '@ngxs/store';
import { FlightSearchState, FlightSearchStateModel } from '../+state/search.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'flight-search-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Select(FlightSearchState.getFlightList) searchResult$: Observable<FlightSearchStateModel>;
  searchFilter: ISearchFilter;
  editMode: boolean;
  private paramsSubscription: any;
  searchResult: any[];

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.searchResult = [];
    this.paramsSubscription = this.route.queryParams.subscribe(params => {
      this.searchFilter = {
        departureAirportCode: params['departureAirportCode'],
        returnAirportCode: params['returnAirportCode'],
        departureDate: new Date(params['departureDate']),
        returnDate: params['returnDate'] !== '' ? new Date(params['returnDate']) : '',
      };
    });
  }
  /**
   * edit button click
   * @returns void
   */
  handleEditClick(): void {
    this.editMode = true;
  }
  /**
   * close search button
   * @returns void
   */
  handleCloseClick(): void {
    this.editMode = false;
  }
  /**
   * flight search button
   * @param  {ISearchFilter} filter
   * @returns void
   */
  handleSearchClick(filter: ISearchFilter): void {
    this.searchFilter.departureAirportCode = filter.departureAirportCode;
    this.searchFilter.returnAirportCode = filter.returnAirportCode;
    this.searchFilter.departureDate = filter.departureDate;
    this.searchFilter.returnDate = filter.returnDate;
    this.router.navigate(['/search/results'], {
      queryParams: this.searchFilter
    });
    this.editMode = false;
  }
}
