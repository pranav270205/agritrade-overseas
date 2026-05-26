export interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  packagingOptions: string[];
  metaTitle: string;
  metaDescription: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  productInterested: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface StatCard {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessCard {
  step: number;
  title: string;
  description: string;
  highlighted?: boolean;
}

export interface WhyChooseCard {
  icon: string;
  title: string;
  description: string;
}

export interface Certification {
  title: string;
  description: string;
  icon: string;
}

export interface ExportCountry {
  name: string;
  region: string;
  flag?: string;
}
