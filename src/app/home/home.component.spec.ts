import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from '../_services/user.service';
import {  ActivatedRouteStub} from 'src/app/mocks/ActivatedRouteStub';
import { UserServiceStub } from 'src/app/mocks/UserServiceStub';
import { RouterTestingModule } from '@angular/router/testing';

import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

describe('LoginComponent', () => {

    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    const UserStub = new UserServiceStub();
    const activatedRouteStub = new ActivatedRouteStub();
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [HomeComponent],
          providers: [
            { provide: UserService, useValue: UserStub },
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
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
        localStorage.setItem('currentUser', JSON.stringify({
          firstName: "saikumar",
          id: 1,
          lastName: "barla",
          token: "fake-jwt-token",
          username: "admin"
        }));
      });

      it('should create', () => {
        expect(component).toBeTruthy();
      });

      it('#ngOnInit', fakeAsync(()=>{
          component.ngOnInit();
          tick();
      }))

      it('#deleteUser', fakeAsync(()=>{
        component.deleteUser(1);
        tick();
    }));

    it('#ngOnDestroy', fakeAsync(()=>{
      component.ngOnDestroy();
      tick();
  }));
    
});