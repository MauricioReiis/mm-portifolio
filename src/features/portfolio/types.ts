export type Project = {
  id: string;
  name: string;
  category: string;
  summary: string;
  implementation: string;
  url: string;
  repositoryUrl: string;
  tags: string[];
  artwork: "kamila" | "prana";
};

export type Experience = {
  period: string;
  company: string;
  role: string;
  project: string;
  description: string;
  technologies: string[];
};

export type TimelineEvent = {
  period: string;
  company: string;
  project: string;
  description: string;
  technologies: string[];
};

export type Service = {
  number: string;
  title: string;
  description: string;
  outcome: string;
};

export type Education = {
  period: string;
  course: string;
  institution: string;
};
