import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../components/footer/footer';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'kairoz-layout',
  standalone: true,
  imports: [NavbarComponent, Footer, RouterOutlet],
  templateUrl: './layout.html',
})
export class Layout {}
