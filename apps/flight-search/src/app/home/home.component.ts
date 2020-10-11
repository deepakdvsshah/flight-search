import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetAccessToken, ISearchFilter } from '@flight-search/shared/search';
import { Store } from '@ngxs/store';
@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent {
    constructor(private router: Router, private store: Store) {
        setInterval(() => {
            this.store.dispatch(new GetAccessToken());
        }, 50000);
        this.store.dispatch(new GetAccessToken());
    }
    handleSearchClick(filter: ISearchFilter) {
        this.router.navigate(['/search/results'], {
            queryParams: filter
        });
    }
}
