import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'My Details Section', cols: 1, rows: 1, color: 'lightpink' },
    {
      text: 'My Manager Details Section',
      cols: 1,
      rows: 1,
      color: 'lightpink'
    },
    {
      text: 'My Leave Applicaiton Section',
      cols: 2,
      rows: 1,
      color: 'lightgreen'
    },
    {
      text: 'My Reporting Employee\'s Pending Leave Applicaiton Section',
      cols: 2,
      rows: 1,
      color: 'lightgreen'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
