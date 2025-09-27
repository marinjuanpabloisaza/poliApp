import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome-component',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class DashboardPage {
  constructor(private router: Router) {}

  navigateToService(serviceId: string) {
    this.router.navigate(['/service', serviceId]);
  }

  title = 'porfolio';
}
