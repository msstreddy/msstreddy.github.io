import { Component, OnInit, Input } from '@angular/core';
import {WeatherService} from '../../weather.service';
import { Isummary } from '../../models/Isummary';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() summaryInfo:Isummary;
  constructor(private weatherService:WeatherService) { 
  }

  ngOnInit() {
  }
  
}
