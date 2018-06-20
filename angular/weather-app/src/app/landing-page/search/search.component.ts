import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../weather.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  city:string;
  constructor(private weatherService:WeatherService) { }
  
  ngOnInit() {
  }
  onButtonClick(cityName:string)
  {
    console.log(cityName);
    this.weatherService.fetchWeatherInfo(cityName);
  }

}
