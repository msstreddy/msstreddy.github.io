import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SummaryComponent } from './landing-page/summary/summary.component';
import { TemperatureComponent } from './landing-page/temperature/temperature.component';
import { PhwComponent } from './landing-page/phw/phw.component';
import { ChartComponent } from './landing-page/chart/chart.component';
import { DayTileComponent } from './landing-page/day-tile/day-tile.component';
import { SearchComponent } from './landing-page/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SummaryComponent,
    TemperatureComponent,
    PhwComponent,
    ChartComponent,
    DayTileComponent,
    SearchComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
