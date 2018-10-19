import { Component } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  title = 'List of Authors';
  authors = ['Author 1', 'Author 2', 'Author 3'];
}
