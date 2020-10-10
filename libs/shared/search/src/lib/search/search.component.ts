import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  defaultMinDate: Date;

  constructor() {
  }

  ngOnInit() {
    this.departureAirportCode = new FormControl(this.searchFilter ? this.searchFilter.departureAirportCode : '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(3)]);
    this.returnAirportCode = new FormControl(this.searchFilter ? this.searchFilter.returnAirportCode : '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(3)]);
    this.departureDate = new FormControl(this.searchFilter ? new Date(this.searchFilter.departureDate) : '',
      [Validators.required]);
    this.returnDate = new FormControl(this.searchFilter ? new Date(this.searchFilter.returnDate) : '',
      [Validators.required]);

    // this.defaultMinDate = this.moment().toDate();

    this.searchForm = new FormGroup({
      departureAirportCode: this.departureAirportCode,
      returnAirportCode: this.returnAirportCode,
      departureDate: this.departureDate,
      returnDate: this.returnDate
    });
  }

  handleClose() {
    this.closeClick.emit();
  }

  handleSearch(formValues: any) {
    if (this.searchForm.valid) {
      this.searchClick.emit(formValues);
    }
  }
}
