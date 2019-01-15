import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewuserComponent } from './component/newuser/newuser.component';
import { ListuserComponent } from './component/listuser/listuser.component';

import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule,
  MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule,
  MatDividerModule, MatSnackBarModule, matFormFieldAnimations } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UploaddocComponent } from './uploaddoc/uploaddoc.component';

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'add', component: NewuserComponent },
  { path: 'list', component: ListuserComponent },
  { path: 'upload/:id', component: UploaddocComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NewuserComponent,
    ListuserComponent,
    UploaddocComponent,
    FileSelectDirective,
    FileDropDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
