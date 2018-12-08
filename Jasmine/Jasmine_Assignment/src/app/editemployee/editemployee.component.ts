import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder) {
        this.form = fb.group({
          name: ['', Validators.required],
          email: [''],
          age: ''
        });
  }

  ngOnInit() {
  }

}
