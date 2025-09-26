import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'welcome-component',
//   imports: [NavbarComponent],
  standalone: true,
  templateUrl: './dashboard.component.html',
//   styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class DashboardPage {






  title = 'porfolio';
}
