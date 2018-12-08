import { BrowserModule, By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditemployeeComponent } from './editemployee.component';
import { DebugElement } from '@angular/core';

describe('EditemployeeComponent', () => {
  let component: EditemployeeComponent;
  let fixture: ComponentFixture<EditemployeeComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditemployeeComponent ]
    })
    .compileComponents().then(() => {
          fixture = TestBed.createComponent(EditemployeeComponent);

          component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
    });
  }));
/*
  beforeEach(() => {
    fixture = TestBed.createComponent(EditemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
*/
 it(`should create a form with 3 controls 'Edit Employee'`, () => {
   expect(component.form.contains('name')).toBeTruthy();
   expect(component.form.contains('age')).toBeTruthy();
   expect(component.form.contains('email')).toBeTruthy();
 });

 it(`should make control required 'Edit Employee'`, () => {
   const control = component.form.get('name');

   control.setValue('');

   expect(control.valid).toBeFalsy();
 });
});
