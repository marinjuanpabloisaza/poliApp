

import { Routes } from '@angular/router';
import { NavbarComponent } from './ui/components/navbar/navbar.component';
import { LoginPage } from './ui/pages/login/login.page';
import { RegisterPage } from './ui/pages/register/register.page';
import { DashboardPage } from './ui/pages/dashboard/dashboard';
import { ServiceDetail } from './ui/pages/service-detail/service-detail';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardPage
      },
      {
        path: 'login',
        component: LoginPage
      },
      {
        path: 'register',
        component: RegisterPage
      },
      {
        path: 'service/:id',
        component: ServiceDetail
      }
    ]
  }
];
