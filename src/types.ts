export interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  url: string;
  featured: boolean;
  tags: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  mockupType: 'forge' | 'haven' | 'noir';
}

export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  idealFor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  project: string;
}
