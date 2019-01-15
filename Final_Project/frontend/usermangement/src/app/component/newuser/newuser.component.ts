import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  createForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router,
  private snackBar: MatSnackBar) {
    this.createForm = this.fb.group({
      firstName: [Validators.required],
      lastName: '',
      email: '',
      ssoid: ''
    });
  }

  addUser(fName, lName, email, ssoid) {
    this.userService.addUser(fName, lName, email, ssoid).subscribe(() => {
      this.router.navigate(['/list']);
      this.snackBar.open('User Created Successfully', 'OK', {
        duration: 3000
      });
    });
  }

  ngOnInit() {

  }
}
