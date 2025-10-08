export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradientColors: string;
  gradientClass: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  steps: string[];
  useCases: string[];
  serviceInfo: {
    duration: string;
    team: string;
    modality: string;
    support: string;
  };
  cta: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
}
