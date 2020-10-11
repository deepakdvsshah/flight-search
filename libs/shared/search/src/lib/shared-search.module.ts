import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchSummaryComponent } from './search-summary/search-summary.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { NgxsModule } from '@ngxs/store';
import { FlightSearchState } from './+state/search.state';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token-interceptor';
import { FlightDestinationsService } from '@openapi/flightSearch';
import { searchRoutes } from './search.routs';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule, FormsModule, ReactiveFormsModule, HttpClientModule, FlexLayoutModule,
    RouterModule.forChild(searchRoutes),
    NgxsModule.forFeature([FlightSearchState]),
  ],
  declarations: [SearchComponent, SearchResultsComponent, SearchSummaryComponent, FlightListComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    FlightDestinationsService
  ],
  exports: [SearchComponent]
})
export class SharedSearchModule { }
