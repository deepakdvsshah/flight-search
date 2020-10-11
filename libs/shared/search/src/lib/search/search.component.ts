import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { GetFlightList } from '../+state/search.action';
import * as moment from 'moment';
import { ISearchFilter } from '../model/search-filter.model';

@Component({
  selector: 'flight-search-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() searchFilter?: ISearchFilter;
  @Input() showClose = false;
  @Output() closeClick = new EventEmitter();
  @Output() searchClick = new EventEmitter();

  searchForm: FormGroup;
  departureAirportCode: FormControl;
  returnAirportCode: FormControl;
  departureDate: FormControl;
  returnDate: FormControl;
  selectedItem: string;
  defaultMinDate: Date;
  oneWay: FormControl;
  nonStop: FormControl;
  views: string[] = [
    'COUNTRY', 'DATE', 'DESTINATION', 'DURATION', 'WEEK'
  ];
  maxPrice: number = null;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.departureAirportCode = new FormControl(this.searchFilter ? this.searchFilter.departureAirportCode : '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(3)]);
    this.returnAirportCode = new FormControl(this.searchFilter ? this.searchFilter.returnAirportCode : '',
    );
    this.departureDate = new FormControl(this.searchFilter ? new Date(this.searchFilter.departureDate) : new Date,
      [Validators.required]);
    this.returnDate = new FormControl(this.searchFilter ? this.searchFilter.returnDate !== '' ? new Date(this.searchFilter.returnDate) : '' : '',
    );
    this.oneWay = new FormControl(this.searchFilter ? this.searchFilter.oneWay : false);
    this.nonStop = new FormControl(this.searchFilter ? this.searchFilter.nonStop : false);

    this.defaultMinDate = moment().toDate();
    this.searchForm = new FormGroup({
      departureAirportCode: this.departureAirportCode,
      returnAirportCode: this.returnAirportCode,
      departureDate: this.departureDate,
      returnDate: this.returnDate,
      oneWay: this.oneWay,
      nonStop: this.nonStop
    });

  }
  /**
   * update price
   * @param  {} event
   * @returns void
   */
  updatePrice(event): void {
    this.maxPrice = event.value;
  }
  /**
   * close event
   * @returns void
   */
  handleClose(): void {
    this.closeClick.emit();
  }
  /**
   * search button
   * @param  {any} formValues
   * @returns void
   */
  handleSearch(formValues: any): void {
    const flightSearch = {
      origin: this.departureAirportCode.value + '',
      departureDate: moment(this.departureDate.value).format('YYYY-MM-DD'),
      oneWay: this.oneWay.value ? true : false,
      duration: moment(this.returnDate.value).diff(moment(this.departureDate.value), 'days') || null,
      nonStop: this.nonStop.value ? true : false,
      maxPrice: this.maxPrice,
      viewBy: this.selectedItem
    }
    if (this.searchForm.valid) {
      this.store.dispatch(new GetFlightList(flightSearch));
      this.searchClick.emit(formValues);
    }
  }
}
