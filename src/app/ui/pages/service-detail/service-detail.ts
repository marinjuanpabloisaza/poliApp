import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.css'
})
export class ServiceDetail {
    lastSegment = signal<string>('');

     technologies = signal([
    'React', 'Node.js', 'Python', 'Django', 'PostgreSQL',
    'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'Git'
  ]);

    steps = signal([
    'Análisis de requerimientos',
    'Diseño de arquitectura',
    'Desarrollo iterativo',
    'Testing y QA',
    'Despliegue y monitoreo'
  ]);


   useCases = signal([
    'Sistemas de gestión empresarial',
    'Plataformas de e-commerce',
    'Aplicaciones móviles',
    'Portales web corporativos',
    'APIs y microservicios'
  ]);
  constructor(private router: Router) {

    const url = this.router.url; // ejemplo: /service/consultoria-tecnologica
    this.lastSegment.set(url.split('/').pop() || '')
  }

  

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
