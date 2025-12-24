export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  type: string;
  image1: string;
  image2: string;
  widthClass?: string; // To allow diverse grid sizing if needed
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
}

export interface Stat {
  label: string;
  value: string;
  sub?: string;
}