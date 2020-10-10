import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes'
import { MaterialModule } from '@flight-search/shared/search';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SharedSearchModule } from '@flight-search/shared/search'
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [BrowserModule,
    NgxsModule.forRoot([]), FlexLayoutModule,
    MaterialModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled', useHash: true }),
    BrowserAnimationsModule, SharedSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
