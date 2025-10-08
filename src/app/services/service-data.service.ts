import { Injectable } from '@angular/core';
import { ServiceData } from '../interfaces/service.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {
  private services: ServiceData[] = [
    {
      id: 'desarrollo-software',
      title: 'Desarrollo de Software',
      description: 'Creamos aplicaciones web y móviles personalizadas utilizando las tecnologías más modernas y arquitecturas escalables para impulsar el crecimiento de tu negocio.',
      icon: '💻',
      gradientColors: 'from-blue-500 via-purple-500 to-pink-500',
      gradientClass: 'gradient-blue',
      fullDescription: 'Nuestro equipo de desarrollo se especializa en crear soluciones digitales robustas y escalables que se adaptan perfectamente a las necesidades específicas de cada cliente. Desde aplicaciones web complejas hasta sistemas empresariales, utilizamos metodologías ágiles y las mejores prácticas de la industria. Trabajamos con un enfoque centrado en el usuario, garantizando que cada aplicación no solo funcione de manera óptima, sino que también ofrezca una experiencia excepcional.',
      features: [
        'Desarrollo full-stack con tecnologías modernas',
        'Arquitecturas escalables y mantenibles',
        'Integración con APIs y servicios externos',
        'Diseño responsive y optimización móvil',
        'Implementación de medidas de seguridad avanzadas',
        'Testing automatizado y control de calidad',
        'Documentación técnica completa',
        'Soporte y mantenimiento continuo'
      ],
      technologies: [
        'React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'Django', 
        'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'Git'
      ],
      steps: [
        'Análisis de requerimientos',
        'Diseño de arquitectura',
        'Desarrollo iterativo',
        'Testing y QA',
        'Despliegue y monitoreo'
      ],
      useCases: [
        'Sistemas de gestión empresarial',
        'Plataformas de e-commerce',
        'Aplicaciones móviles',
        'Portales web corporativos',
        'APIs y microservicios'
      ],
      serviceInfo: {
        duration: '3-6 meses',
        team: '4-8 desarrolladores',
        modality: 'Remoto/Presencial',
        support: '3 meses'
      },
      cta: {
        title: '¿Interesado en este servicio?',
        description: 'Contacta con nuestro equipo de expertos para discutir tu proyecto y obtener una propuesta personalizada sin compromiso.',
        primaryButton: '💬 Solicitar Cotización',
        secondaryButton: '📞 Agendar Consulta'
      }
    },
    {
      id: 'consultoria-tecnologica',
      title: 'Consultoría Tecnológica',
      description: 'Brindamos asesoramiento estratégico en tecnología para optimizar procesos, reducir costos y mejorar la eficiencia operacional de tu empresa.',
      icon: '📊',
      gradientColors: 'from-green-500 via-teal-500 to-cyan-500',
      gradientClass: 'gradient-green',
      fullDescription: 'Nuestra consultoría tecnológica se enfoca en analizar tu infraestructura actual y proponer soluciones estratégicas que impulsen la transformación digital de tu organización. Evaluamos procesos, identificamos oportunidades de mejora y diseñamos roadmaps tecnológicos que se alineen con tus objetivos de negocio.',
      features: [
        'Análisis de infraestructura actual',
        'Evaluación de procesos tecnológicos',
        'Diseño de estrategias digitales',
        'Optimización de costos IT',
        'Roadmap tecnológico personalizado',
        'Migración y modernización de sistemas',
        'Capacitación del equipo técnico',
        'Seguimiento y soporte continuo'
      ],
      technologies: [
        'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform',
        'Ansible', 'Jenkins', 'GitLab CI', 'Prometheus', 'Grafana', 'ELK Stack'
      ],
      steps: [
        'Auditoría tecnológica',
        'Análisis de brechas',
        'Propuesta de soluciones',
        'Plan de implementación',
        'Seguimiento y optimización'
      ],
      useCases: [
        'Modernización de infraestructura',
        'Optimización de procesos IT',
        'Migración a la nube',
        'Implementación de DevOps',
        'Gestión de costos tecnológicos'
      ],
      serviceInfo: {
        duration: '2-4 meses',
        team: '2-4 consultores',
        modality: 'Remoto/Presencial',
        support: '6 meses'
      },
      cta: {
        title: '¿Necesitas asesoramiento tecnológico?',
        description: 'Nuestros consultores están listos para ayudarte a optimizar tu infraestructura tecnológica y alcanzar tus objetivos de negocio.',
        primaryButton: '📋 Solicitar Auditoría',
        secondaryButton: '💼 Consulta Estratégica'
      }
    },
    {
      id: 'transformacion-digital',
      title: 'Transformación Digital',
      description: 'Acompañamos a tu empresa en el proceso completo de digitalización, desde la estrategia hasta la implementación de soluciones innovadoras.',
      icon: '🚀',
      gradientColors: 'from-orange-500 via-red-500 to-pink-500',
      gradientClass: 'gradient-orange',
      fullDescription: 'La transformación digital es más que implementar tecnología; es cambiar la cultura organizacional para aprovechar al máximo las oportunidades digitales. Nuestro enfoque integral incluye la evaluación de procesos, capacitación de equipos y la implementación gradual de soluciones que generen valor real para tu negocio.',
      features: [
        'Diagnóstico de madurez digital',
        'Estrategia de transformación integral',
        'Automatización de procesos',
        'Capacitación y cambio cultural',
        'Implementación de soluciones digitales',
        'Medición de ROI y KPIs',
        'Gestión del cambio organizacional',
        'Seguimiento y optimización continua'
      ],
      technologies: [
        'RPA', 'AI/ML', 'Business Intelligence', 'CRM', 'ERP', 'Low-Code Platforms',
        'Microsoft Power Platform', 'Salesforce', 'SAP', 'Oracle', 'Tableau', 'Power BI'
      ],
      steps: [
        'Diagnóstico y evaluación',
        'Estrategia y planificación',
        'Implementación gradual',
        'Capacitación y adopción',
        'Optimización continua'
      ],
      useCases: [
        'Automatización de procesos',
        'Implementación de CRM/ERP',
        'Analytics y Business Intelligence',
        'E-commerce y canales digitales',
        'Gestión documental digital'
      ],
      serviceInfo: {
        duration: '6-12 meses',
        team: '5-10 especialistas',
        modality: 'Remoto/Presencial',
        support: '12 meses'
      },
      cta: {
        title: '¿Listo para transformar tu empresa?',
        description: 'Descubre cómo podemos ayudarte a digitalizar tus procesos y competir en el mercado digital actual.',
        primaryButton: '🎯 Iniciar Transformación',
        secondaryButton: '📊 Evaluación Gratuita'
      }
    },
    {
      id: 'cloud-solutions',
      title: 'Soluciones en la Nube',
      description: 'Migramos y optimizamos tu infraestructura en la nube para mejorar la escalabilidad, seguridad y eficiencia de tus sistemas.',
      icon: '☁️',
      gradientColors: 'from-indigo-500 via-blue-500 to-purple-500',
      gradientClass: 'gradient-indigo',
      fullDescription: 'Las soluciones en la nube ofrecen flexibilidad, escalabilidad y costos optimizados. Nuestro equipo especializado te ayuda a migrar tu infraestructura de manera segura, implementar arquitecturas cloud-native y optimizar costos, garantizando alta disponibilidad y seguridad de tus aplicaciones.',
      features: [
        'Migración segura a la nube',
        'Arquitecturas cloud-native',
        'Optimización de costos',
        'Alta disponibilidad y escalabilidad',
        'Seguridad y compliance',
        'Monitoreo y observabilidad',
        'Backup y disaster recovery',
        'Soporte 24/7 especializado'
      ],
      technologies: [
        'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform',
        'CloudFormation', 'Ansible', 'Prometheus', 'Grafana', 'ELK Stack', 'Datadog'
      ],
      steps: [
        'Evaluación de infraestructura actual',
        'Plan de migración',
        'Implementación gradual',
        'Optimización y tuning',
        'Monitoreo continuo'
      ],
      useCases: [
        'Migración de servidores físicos',
        'Aplicaciones web escalables',
        'Big Data y Analytics',
        'Backup y disaster recovery',
        'Entornos de desarrollo/test'
      ],
      serviceInfo: {
        duration: '4-8 meses',
        team: '3-6 ingenieros cloud',
        modality: 'Remoto/Presencial',
        support: '6 meses'
      },
      cta: {
        title: '¿Necesitas migrar a la nube?',
        description: 'Nuestros expertos en cloud te ayudan a migrar de manera segura y optimizar tu infraestructura en la nube.',
        primaryButton: '☁️ Evaluación Cloud',
        secondaryButton: '💡 Consulta Técnica'
      }
    },
    {
      id: 'ciberseguridad',
      title: 'Ciberseguridad',
      description: 'Protegemos tu empresa con soluciones integrales de seguridad que garantizan la confidencialidad, integridad y disponibilidad de tus datos.',
      icon: '🔒',
      gradientColors: 'from-purple-500 via-pink-500 to-red-500',
      gradientClass: 'gradient-purple',
      fullDescription: 'En un mundo cada vez más digitalizado, la seguridad es fundamental. Implementamos estrategias de ciberseguridad adaptadas a tu industria, incluyendo auditorías de seguridad, implementación de controles, monitoreo 24/7 y respuesta a incidentes, protegiendo tu organización contra amenazas cibernéticas.',
      features: [
        'Auditorías de seguridad integrales',
        'Implementación de controles de seguridad',
        'Monitoreo 24/7 (SOC)',
        'Respuesta a incidentes',
        'Cumplimiento normativo (GDPR, SOX, etc.)',
        'Capacitación en conciencia de seguridad',
        'Penetration testing',
        'Gestión de vulnerabilidades'
      ],
      technologies: [
        'SIEM', 'EDR/XDR', 'Firewalls', 'VPN', 'IAM', 'PAM',
        'Vulnerability Scanners', 'Nessus', 'Qualys', 'CrowdStrike', 'SentinelOne', 'Splunk'
      ],
      steps: [
        'Evaluación de riesgos',
        'Diseño de estrategia de seguridad',
        'Implementación de controles',
        'Monitoreo y detección',
        'Respuesta y recuperación'
      ],
      useCases: [
        'Protección de datos sensibles',
        'Cumplimiento normativo',
        'Prevención de ataques',
        'Respuesta a incidentes',
        'Auditorías de seguridad'
      ],
      serviceInfo: {
        duration: '3-6 meses',
        team: '2-5 especialistas en seguridad',
        modality: 'Remoto/Presencial',
        support: '12 meses'
      },
      cta: {
        title: '¿Tu empresa está protegida?',
        description: 'Evalúa la seguridad de tu organización y protege tus activos más valiosos con nuestras soluciones de ciberseguridad.',
        primaryButton: '🔍 Auditoría de Seguridad',
        secondaryButton: '🛡️ Consulta de Protección'
      }
    },
    {
      id: 'soporte-tecnico',
      title: 'Soporte Técnico',
      description: 'Brindamos soporte técnico especializado para mantener tus sistemas funcionando de manera óptima y resolver cualquier incidencia rápidamente.',
      icon: '🛠️',
      gradientColors: 'from-yellow-500 via-orange-500 to-red-500',
      gradientClass: 'gradient-yellow',
      fullDescription: 'Nuestro equipo de soporte técnico está disponible para resolver cualquier incidencia, realizar mantenimiento preventivo y optimizar el rendimiento de tus sistemas. Ofrecemos diferentes niveles de soporte adaptados a las necesidades de tu empresa, garantizando la continuidad operacional.',
      features: [
        'Soporte técnico 24/7',
        'Mantenimiento preventivo',
        'Resolución de incidencias',
        'Optimización de rendimiento',
        'Actualizaciones y parches',
        'Monitoreo proactivo',
        'Capacitación técnica',
        'Documentación y reportes'
      ],
      technologies: [
        'Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Active Directory',
        'Exchange', 'Office 365', 'Backup Solutions', 'Monitoring Tools', 'Ticketing Systems'
      ],
      steps: [
        'Evaluación inicial',
        'Plan de soporte personalizado',
        'Implementación de monitoreo',
        'Soporte continuo',
        'Optimización y mejora'
      ],
      useCases: [
        'Soporte de servidores',
        'Mantenimiento de aplicaciones',
        'Resolución de incidencias',
        'Optimización de rendimiento',
        'Migración de sistemas'
      ],
      serviceInfo: {
        duration: 'Continuo',
        team: '2-4 técnicos especializados',
        modality: 'Remoto/Presencial',
        support: 'Incluido'
      },
      cta: {
        title: '¿Necesitas soporte técnico?',
        description: 'Mantén tus sistemas funcionando perfectamente con nuestro equipo de soporte técnico especializado.',
        primaryButton: '🆘 Solicitar Soporte',
        secondaryButton: '📞 Llamada de Emergencia'
      }
    }
  ];

  getServiceById(id: string): ServiceData | undefined {
    return this.services.find(service => service.id === id);
  }

  getAllServices(): ServiceData[] {
    return this.services;
  }

  getServiceTitle(id: string): string {
    const service = this.getServiceById(id);
    return service ? service.title : 'Servicio no encontrado';
  }
}
