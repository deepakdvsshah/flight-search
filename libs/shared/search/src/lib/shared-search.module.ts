import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { NgxsModule } from '@ngxs/store';
import { FlightSearchState } from './+state/search.state';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule, FormsModule, ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: SearchComponent }
    ]), NgxsModule.forFeature([FlightSearchState]),
  ],
  declarations: [SearchComponent],
})
export class SharedSearchModule { }
