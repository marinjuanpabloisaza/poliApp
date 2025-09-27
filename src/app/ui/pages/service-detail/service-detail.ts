import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.css'
})
export class ServiceDetail {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
