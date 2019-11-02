import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthServiceStub } from 'src/app/mocks/AuthServiceStub';
import { AuthenticationService } from '../_services/authentication.service';
import {  ActivatedRouteStub} from 'src/app/mocks/ActivatedRouteStub';

import { RouterTestingModule } from '@angular/router/testing';

import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

describe('LoginComponent', () => {

    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    const AuthenticationServiceStub = new AuthServiceStub();
    const activatedRouteStub = new ActivatedRouteStub();
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [LoginComponent],
          providers: [
            { provide: AuthenticationService, useValue: AuthenticationServiceStub },
            { provide: ActivatedRoute, useValue: activatedRouteStub },
          ],
          imports: [
            BrowserModule,
            HttpClientModule,
            ReactiveFormsModule,
            RouterTestingModule
           
          ]
        })
          .compileComponents();
      }));

      beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
        localStorage.setItem('currentUser', JSON.stringify({
          firstName: "saikumar",
          id: 1,
          lastName: "barla",
          token: "fake-jwt-token",
          username: "admin"
        }))
      });

      it('should create', () => {
        expect(component).toBeTruthy();
      });

      it('#ngOnInit', fakeAsync(()=>{
          component.ngOnInit();
          tick();
          // expect(component.returnUrl).toBe()
      }));
      it('#f', fakeAsync(()=>{
        // component.f();
        tick();
      }))

      it('#onSubmit', fakeAsync(()=>{
        component.onSubmit();
        tick();
        // component.authenticationService(l)
      }))
    
});