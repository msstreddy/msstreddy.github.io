import { Component, OnInit, Input } from '@angular/core';
import {Itile} from '../../models/Itile';
@Component({
  selector: 'app-day-tile',
  templateUrl: './day-tile.component.html',
  styleUrls: ['./day-tile.component.css']
})
export class DayTileComponent implements OnInit {
  @Input() tileInfo:Itile;
  constructor() { }

  ngOnInit() {
  }

}
