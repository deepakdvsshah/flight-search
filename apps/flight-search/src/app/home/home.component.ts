import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISearchFilter } from '@flight-search/shared/search';
@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent {
    constructor(private router: Router) {
    }
    handleSearchClick(filter: ISearchFilter) {
        this.router.navigate(['/search/results'], {
            queryParams: filter
        });
    }
}
