import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ISearchFilter } from '../model/search-filter.model';


@Component({
  selector: 'flight-search-search-summary',
  templateUrl: './search-summary.component.html',
  styleUrls: ['./search-summary.component.scss']
})
export class SearchSummaryComponent {
  @Input() searchFilter: ISearchFilter;
  @Output() editClick = new EventEmitter();

  handleEdit() {
    this.editClick.emit();
  }
}
