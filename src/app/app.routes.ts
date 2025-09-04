

import { Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.componet';
import { LoginPage } from './pages/login/login.page';
import { NavbarComponent } from './components/navbar/navbar.component';


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
      }
    ]
  }
];
