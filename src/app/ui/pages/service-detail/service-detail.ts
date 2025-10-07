import { Component, signal, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ServiceData } from '../../../interfaces/service.interface';
import { ServiceDataService } from '../../../services/service-data.service';

@Component({
  selector: 'kairoz-service-detail',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.css',
})
export class ServiceDetail implements OnInit {
  serviceId = signal<string>('');
  serviceData = signal<ServiceData | null>(null);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceDataService: ServiceDataService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    // Obtener el ID del servicio desde la ruta
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.serviceId.set(id);
      
      // Obtener los datos del servicio
      const service = this.serviceDataService.getServiceById(id);
      if (service) {
        this.serviceData.set(service);
      } else {
        // Si no se encuentra el servicio, redirigir al dashboard
        this.router.navigate(['/dashboard']);
      }
    });
  }

  // Getters para facilitar el acceso a los datos en el template
  get lastSegment() {
    const serviceId = this.serviceId();
    return this.translate.instant(`serviceDetail.services.${serviceId}.title`) || 'Servicio no encontrado';
  }

  get features() {
    const serviceId = this.serviceId();
    return this.translate.instant(`serviceDetail.services.${serviceId}.features`) || [];
  }

  get technologies() {
    const serviceId = this.serviceId();
    return this.translate.instant(`serviceDetail.services.${serviceId}.technologies`) || [];
  }

  get steps() {
    const serviceId = this.serviceId();
    return this.translate.instant(`serviceDetail.services.${serviceId}.steps`) || [];
  }

  get useCases() {
    const serviceId = this.serviceId();
    return this.translate.instant(`serviceDetail.services.${serviceId}.useCases`) || [];
  }

  get serviceInfo() {
    return this.serviceData()?.serviceInfo;
  }

  get cta() {
    const serviceId = this.serviceId();
    return {
      title: this.translate.instant(`serviceDetail.services.${serviceId}.cta.title`),
      description: this.translate.instant(`serviceDetail.services.${serviceId}.cta.description`),
      primaryButton: this.translate.instant(`serviceDetail.services.${serviceId}.cta.primaryButton`),
      secondaryButton: this.translate.instant(`serviceDetail.services.${serviceId}.cta.secondaryButton`)
    };
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
