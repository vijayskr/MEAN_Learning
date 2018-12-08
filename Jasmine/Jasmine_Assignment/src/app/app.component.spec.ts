import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NewemployeeComponent } from './newemployee/newemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  { path: 'newemp', component: NewemployeeComponent },
  { path: 'editemp', component: EditemployeeComponent }
];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
           RouterTestingModule.withRoutes(appRoutes)
      ]
    }).compileComponents();
  }));
});
