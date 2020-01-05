import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoggedInAuthGuard } from './core/guards/login.guard';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    canActivate: [LoggedInAuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoggedInAuthGuard]
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [LoggedInAuthGuard]
  },
  {
    path: 'user',
    component: UsersComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: 'add-emp',
    component: AddEmpComponent
  },
  {
    path: 'emp-list',
    component: EmpListComponent
  },
  {
    path: 'edit-emp/:id',
    component: EditEmpComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
