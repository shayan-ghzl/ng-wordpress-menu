import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestRouteComponent } from './test-route/test-route.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';
import { IconsComponent } from './icons/icons.component';
import { TogglerComponent } from './toggler/toggler.component';
import { NgWordpressMenu } from 'ng-wordpress-menu';

@NgModule({
  declarations: [
    AppComponent,
    TestRouteComponent,
    HomeComponent,
    IconsComponent,
    TogglerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgWordpressMenu,
    ClipboardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
