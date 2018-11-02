import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [ DataService ]
})
export class TodoComponent implements OnInit {

  constructor(private dataservice: DataService) { }

  addItem(form) {

    this.dataservice.adtodoItem(newItem);
  }
  ngOnInit() {
  }

}
