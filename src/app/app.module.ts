import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './training/home/home.component';
import { MovieComponent } from './training/movie/movie.component';
import { LoginComponent } from './training/login/login.component';
import { FormControl, FormsModule } from '@angular/forms';
import { HeaderComponent } from './training/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FeatureModule } from './feature/feature.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
