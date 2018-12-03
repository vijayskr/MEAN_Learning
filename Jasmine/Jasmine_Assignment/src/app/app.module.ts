import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule,  MatMenuModule,  MatToolbarModule,  MatIconModule,  MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NewemployeeComponent } from './newemployee/newemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  { path: 'newemp', component: NewemployeeComponent },
  { path: 'editemp', component: EditemployeeComponent }
];

@NgModule({
  declarations: [AppComponent, NewemployeeComponent, EditemployeeComponent],
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    AppRoutingModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
