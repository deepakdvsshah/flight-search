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
  editMode: boolean;
  private paramsSubscription: any;
  searchResult: any[];

  constructor(private router: Router, private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
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
}
