import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
