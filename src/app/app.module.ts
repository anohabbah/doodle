import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PrimeNGModule} from './prime-ng.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { DoodleComponent } from './doodle/doodle.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DoodleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PrimeNGModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
