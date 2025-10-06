import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kairoz-dashboard',
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
