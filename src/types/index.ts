// Types for Better Zamboanga data structures

export interface Official {
  name: string;
  title: string;
  office?: string;
  phone?: string;
  email?: string;
  fax?: string;
  location?: string;
  image?: string;
  subtitle?: string;
  district?: string;
}

export interface OfficialsData {
  mayor: Official;
  vice_mayor: Official;
  councilors_district_1: Official[];
  councilors_district_2: Official[];
  department_heads: Official[];
  chief_of_staff: Official;
}

export interface Service {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  description: string;
  keywords: string[];
  fee: string;
  processingTime: string;
  office: string;
  url: string;
}

export interface ServicesData {
  services: Service[];
}

export interface DPWHProject {
  id: string;
  name: string;
  location: string;
  category: string;
  contractor: string;
  contractorId: string;
  cost: number;
  status: number;
  completionDate: string;
  source?: string;
}

export interface DPWHProjectsData {
  summary: {
    totalProjects: number;
    totalCost: number;
    completedProjects: number;
    ongoingProjects: number;
    implementingAgency: string;
  };
  projects: DPWHProject[];
}

export interface Ordinance {
  ordinanceNo: string;
  title: string;
  enacted: string;
  approved: string;
  category: string;
  year: string;
}

export interface OrdinancesData {
  ordinances: Ordinance[];
}

export interface Resolution {
  resolutionNo: string;
  title: string;
  adopted?: string;
  sessionDate?: string;
  year: string;
}

export interface ResolutionsData {
  resolutions: Resolution[];
}

export interface CMCIPillar {
  id: string;
  name: string;
  icon: string;
  indicators: {
    name: string;
    values: (number | null)[];
  }[];
}

export interface CompetitiveIndexData {
  title: string;
  description: string;
  source: string;
  city: string;
  classification: string;
  region: string;
  years: number[];
  pillars: CMCIPillar[];
  keyIndicators: {
    name: string;
    values: (number | null)[];
  }[];
}
