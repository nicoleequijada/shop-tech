import { Component, OnInit } from '@angular/core';
import { lastUnits } from 'src/utils/lastUnits';

@Component({
  selector: 'app-last-units',
  templateUrl: './last-units.component.html',
  styleUrls: ['./last-units.component.css']
})
export class LastUnitsComponent implements OnInit {

  constructor() { }
  lastUnits = lastUnits

  ngOnInit(): void {
  }

}
