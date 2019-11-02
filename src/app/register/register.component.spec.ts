import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RegisterComponent } from './register.component';

import { Router, ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from '../_services/user.service';
import {  ActivatedRouteStub} from 'src/app/mocks/ActivatedRouteStub';
import { UserServiceStub } from 'src/app/mocks/UserServiceStub';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {

    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;
    const UserStub = new UserServiceStub();
    const activatedRouteStub = new ActivatedRouteStub();
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [RegisterComponent],
          providers: [
            { provide: UserService, useValue: UserServiceStub },
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
        fixture = TestBed.createComponent(RegisterComponent);
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
      }));


      it('#onSubmit', fakeAsync(()=>{
        component.onSubmit();
        tick();
    }));
    
});