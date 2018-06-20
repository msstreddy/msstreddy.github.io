import { Component, OnInit, Input } from '@angular/core';
import { Iphw } from '../../models/Iphw';

@Component({
  selector: 'app-phw',
  templateUrl: './phw.component.html',
  styleUrls: ['./phw.component.css']
})
export class PhwComponent implements OnInit {
   @Input() phwInfo:Iphw;
  constructor() { }

  ngOnInit() {
  }

}
