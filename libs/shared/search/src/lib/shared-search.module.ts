import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { NgxsModule } from '@ngxs/store';
import { FlightSearchState } from './+state/search.state';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationServiceService } from './authentication-service.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token-interceptor';
import { FlightDestinationsService } from '@openapi/flightSearch';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: SearchComponent }
    ]), NgxsModule.forFeature([FlightSearchState]),
  ],
  declarations: [SearchComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }, ,
    AuthenticationServiceService, FlightDestinationsService
  ]
})
export class SharedSearchModule { }
