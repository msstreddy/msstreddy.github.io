import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  @Input() tile:Tiles;
  constructor() { }
  ngOnInit() {
  }

}
export interface Tiles {
  name:string;
  description:string;
  imgURL:string;
}
