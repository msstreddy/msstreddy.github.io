import { Injectable } from '@angular/core';
import {Itile} from './models/Itile';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  dayTileList: Array<Itile>
  constructor() {
    this.dayTileList=[
    {
      day: "wed",
      dayNum: 3,
      imageURL: "../assets/images/partly_cloudy.png",
      minTemp: 20,
      maxTemp: 30
    },
    {
      day: "wed",
      dayNum: 3,
      imageURL: "../assets/images/partly_cloudy.png",
      minTemp: 20,
      maxTemp: 30
    },
    {
      day: "wed",
      dayNum: 3,
      imageURL: "../assets/images/partly_cloudy.png",
      minTemp: 20,
      maxTemp: 30
    },
    {
      day: "wed",
      dayNum: 3,
      imageURL: "../assets/images/partly_cloudy.png",
      minTemp: 20,
      maxTemp: 30
    },
    {
      day: "wed",
      dayNum: 3,
      imageURL: "../assets/images/partly_cloudy.png",
      minTemp: 20,
      maxTemp: 30
    }
  ]}
   
}
