import { Component, OnInit } from '@angular/core';
import { User } from '../entity/user';
import { UserService } from '../services/user.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<User>;
  constructor(public userService: UserService) {
    this.users = new Array<User>();

  }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe((resp: Response) => {
      this.users = resp.json();
      console.log(JSON.stringify(resp.json()));
    });
  }

}
