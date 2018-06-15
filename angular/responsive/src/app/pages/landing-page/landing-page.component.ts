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
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'CSS',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'JS',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'React',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'Angular',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'Webpack',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'HTML',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'CSS',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'JS',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'React',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'Angular',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'Webpack',
      description: 'aaaa',
      imgURL: 'assets/images/html.png'
    }
  ];
  constructor() { 
    this.headerText="--We are Learning--";
  }
  
  ngOnInit() {
  }

}
