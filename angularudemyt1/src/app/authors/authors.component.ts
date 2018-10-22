import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title = 'List of Authors';
  authors = ['Author 1', 'Author 2', 'Author 3'];

  isFav: boolean;

  ngOnInit() {

  }

  onClick()  {
    this.isFav = !this.isFav;
  }
}
