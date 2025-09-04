import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'navbarCom',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet],

})
export class NavbarComponent {



    
  title = 'porfolio';
}
