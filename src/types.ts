export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  tools: string[];
  timeline: string;
  highlight?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
  year: string;
  tags: string[];
  impactMetric: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  liveUrl?: string;
  behanceUrl?: string;
}

export interface BlogItem {
  id: string;
  title: string;
  summary: string;
  readTime: string;
  date: string;
  category: string;
  coverImage: string;
  content: string[];
  author: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  projectType: string;
}

export interface StatItem {
  label: string;
  value: string;
  subtext: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  details?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string[];
  type: 'Internship' | 'Leadership';
}

