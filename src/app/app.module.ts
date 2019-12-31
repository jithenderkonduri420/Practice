import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { ErrorInterceptor } from './core/helpers/error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { AlertComponent } from './alert/alert.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmpListComponent } from './emp-list/emp-list.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DashboardComponent,
    LoginComponent,
    UsersComponent,
    AlertComponent,
    AddEmpComponent,
    EmpListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
