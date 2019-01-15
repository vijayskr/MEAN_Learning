import { UserDoc } from './../userdoc.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { UserService } from '../user.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-uploaddoc',
  templateUrl: './uploaddoc.component.html',
  styleUrls: ['./uploaddoc.component.css']
})
export class UploaddocComponent implements OnInit {
  userDoc: UserDoc[];
  displayedcolumns = ['fileName', 'type', 'description', 'actions'];
  public id: string;
  private uploader: FileUploader;
  private url = 'http://localhost:4000/users/file/upload';

  constructor(
    private userService: UserService,
    private route: Router,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit() {
    this.fetchDocs();
     this.uploader = new FileUploader({ url: `${this.url}/${this.id}` });
  }

  /*addUser(fName, lName, email, ssoid) {
    this.userService.addUser(fName, lName, email, ssoid).subscribe(() => {
      this.route.navigate([`/users/file/upload/${this.id}`]);
      this.snackBar.open('User Document Uploaded Successfully', 'OK', {
        duration: 3000
      });
    });

  }*/

  fetchDocs() {
    this.userService.getUsers().subscribe((data: UserDoc[]) => {
      this.userDoc = data;
    });
  }
}
