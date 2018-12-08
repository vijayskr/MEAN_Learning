import { BrowserModule, By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewemployeeComponent } from './newemployee.component';
import { DebugElement } from '@angular/core';

describe('NewemployeeComponent', () => {
  let component: NewemployeeComponent;
  let fixture: ComponentFixture<NewemployeeComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewemployeeComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents().then(() => {
    fixture = TestBed.createComponent(NewemployeeComponent);

    component = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
    });
  }));

  /*
  beforeEach(() => {
    fixture = TestBed.createComponent(NewemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  */

 it(`should create a form with 3 controls 'Add Employee'`, () => {
   expect(component.form.contains('name')).toBeTruthy();
   expect(component.form.contains('age')).toBeTruthy();
   expect(component.form.contains('email')).toBeTruthy();
 });

 it(`should make control required 'Add Employee'`, () => {
  const control = component.form.get('name');

  control.setValue('');

  expect(control.valid).toBeFalsy();

 });

});
