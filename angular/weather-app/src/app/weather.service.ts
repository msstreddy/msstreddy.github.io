import { Injectable } from '@angular/core';
import {Itile} from './models/Itile';
import {Http} from '@angular/http';
import { Isummary } from './models/Isummary';
import * as moment from 'moment';
import { Itemperature } from './models/Itemperature';
import { Iphw } from './models/Iphw';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  dayWiseMap: any;
  dayTileList: Array<Itile>;
  summary: Isummary;
  phw:Iphw;
  temperatureInfo:Itemperature;
  constructor(private httpService:Http) {
    this.dayWiseMap = {}
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
        data.list.forEach(date => {
          // console.log(date);
          const dateValue = new Date(date.dt * 1000);
          const dayNum = dateValue.getDay();
          if (dayNum in this.dayWiseMap) {
            this.dayWiseMap[dayNum].push(date);
          } else {
            this.dayWiseMap[dayNum] = [date];
          }
        });
        console.log(this.dayWiseMap);
      
        const sortedMap = _.sortBy(this.dayWiseMap, (value) => {
          let dayOfWeek = new Date(value[0].dt * 1000).getDay();
          let today = new Date().getDay();
          const diff = dayOfWeek - today;
          return diff < 0 ? diff + 7 : diff;
        });
      
        console.log(sortedMap);
      
        this.dayTileList = _.map(sortedMap, (obj) => {
          const minTemp = _.reduce(obj.map(interval => interval.main.temp_min), (a, b) => a + b) / obj.length;
          return {
            day: moment(obj[0].dt * 1000).format("ddd"),
            minTemp: _.round(minTemp - 273, 2),
            maxTemp: _.round(obj[0].main.temp_max - 273, 2),
            imageURL: 'http://openweathermap.org/img/w/'+obj[0].weather[0].icon+'.png',
            dayNum: new Date(obj[0].dt * 1000).getDay()
          }
        });
        console.log(this.dayTileList);
      });
    }
    
  
}
  