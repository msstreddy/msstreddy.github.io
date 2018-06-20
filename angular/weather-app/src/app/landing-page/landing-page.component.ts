import { Component, OnInit, Input } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  
  constructor(private Weather:WeatherService) {
      
   }

  ngOnInit() {
  }

}
