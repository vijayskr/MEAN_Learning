import { Router } from '@angular/router';
import { User } from './../../user.model';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  users: User[];
  displayedcolumns = ['firstName', 'lastName', 'email', 'ssoid', 'actions'];

  constructor(private userService: UserService, private route: Router) {}

  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  editUser(id) {
    this.route.navigate([`/upload/${id}`]);
  }
}
