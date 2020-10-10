import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ISearchFilter } from '../model/search-filter.model';
import { PageEvent } from '@angular/material/paginator';
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
  // searchResult: ISearchResult;
  editMode: boolean;

  private paramsSubscription: any;
  searchResult: any[];

  constructor(private router: Router, private route: ActivatedRoute,
    // private flightSearchService: FlightSearchService, private configService: ConfigService
  ) {
  }

  ngOnInit() {
    this.searchResult = [];
    this.paramsSubscription = this.route.queryParams.subscribe(params => {
      this.searchFilter = {
        departureAirportCode: params['departureAirportCode'],
        returnAirportCode: params['returnAirportCode'],
        departureDate: new Date(params['departureDate']),
        returnDate: new Date(params['returnDate']),
        pageIndex: +params['pageIndex'] || 0,
        pageSize: +params['pageSize'],
        sortBy: params['sortBy'],
        sortOrder: +params['sortOrder'] || 1
      };


    });
  }

  handleEditClick() {
    this.editMode = true;
  }

  handleCloseClick() {
    this.editMode = false;
  }

  handleSearchClick(filter: ISearchFilter) {
    this.searchFilter.departureAirportCode = filter.departureAirportCode;
    this.searchFilter.returnAirportCode = filter.returnAirportCode;
    this.searchFilter.departureDate = filter.departureDate;
    this.searchFilter.returnDate = filter.returnDate;

    this.router.navigate(['/search/results'], {
      queryParams: this.searchFilter
    });
    this.editMode = false;
  }

  handlePageChange(event: PageEvent) {
    this.searchFilter.pageIndex = event.pageIndex;
    this.searchFilter.pageSize = event.pageSize;

    this.router.navigate(['/search'], {
      queryParams: this.searchFilter
    });
  }

  handleSortChange(event) {
    this.searchFilter.sortBy = event.SortBy;
    this.searchFilter.sortOrder = event.SortDirection;

    this.router.navigate(['/search'], {
      queryParams: this.searchFilter
    });
  }


}
