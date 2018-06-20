import { Injectable } from '@angular/core';
import {Itile} from './models/Itile';
import {Http} from '@angular/http';
import { Isummary } from './models/Isummary';
import * as moment from 'moment';
import { Itemperature } from './models/Itemperature';
import { Iphw } from './models/Iphw';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  dayTileList: Array<Itile>;
  summary: Isummary;
  phw:Iphw;
  temperatureInfo:Itemperature;
  constructor(private httpService:Http) {
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
  ]
  }
  fetchWeatherInfo(cityName: string) {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=27d43832d2a4adcb97fcbfa23db130aa`;
    this.httpService.get(url)
      .subscribe((rsp) => {
        console.log(rsp.json());
        const data = rsp.json();
        this.summary = {
          cityName: data.city.name,
          day: moment(data.list[0].dt * 1000).format("dddd"),
          weatherCondition: data.list[0].weather[0].description
        },
        this.temperatureInfo={
          image:'http://openweathermap.org/img/w/'+data.list[0].weather[0].icon+'.png',
          temperature:Math.ceil(data.list[0].main.temp-273)
        }
        this.phw={
          pressure:data.list[0].main.pressure,
          humidity:data.list[0].main.humidity,
          wind:data.list[0].wind.speed
        }

    })
  }
}
  