import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgWordpressMenu } from 'ng-wordpress-menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestRouteComponent } from './test-route/test-route.component';

@NgModule({
  declarations: [
    AppComponent,
    TestRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgWordpressMenu
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
