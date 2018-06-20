import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { Itemperature } from '../../models/Itemperature';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  @Input() tempInfo:Itemperature;
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
  }

}
