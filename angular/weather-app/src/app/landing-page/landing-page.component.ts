import { Component, OnInit, Input } from '@angular/core';
import {WeatherService} from '../weather.service';
import { Isummary } from '../models/Isummary';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  
  constructor(private weather:WeatherService) {
    
   }

  ngOnInit() {
  }

}
