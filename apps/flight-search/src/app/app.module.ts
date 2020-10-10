import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes'
import { MaterialModule } from '@flight-search/shared/search';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule,
    NgxsModule.forRoot([]),
    MaterialModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled', useHash: true }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
