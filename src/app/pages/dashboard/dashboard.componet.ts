import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'welcome-component',
//   imports: [NavbarComponent],
  standalone: true,
  templateUrl: './dashboard.component.html',
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
