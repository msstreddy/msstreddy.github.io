import { Component, OnInit } from '@angular/core';
import {Tiles} from '../tiles/tiles.component';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  headerText:string;
  skillInformation: Array<Tiles> = [
    {
      name: 'HTML',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'CSS',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'JS',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'React',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'Angular',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'Webpack',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'HTML',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'CSS',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'JS',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'React',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'Angular',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'Webpack',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/html.png'
    }
  ];
  constructor() { 
    this.headerText="--We are Learning--";
  }
  
  ngOnInit() {
  }

}
