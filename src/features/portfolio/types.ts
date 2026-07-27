export type Experience = {
  period: string;
  company: string;
  project: string;
  description: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  url: string;
  className: string;
  artwork: "kamila" | "prana";
};

export type Education = {
  period: string;
  course: string;
  institution: string;
};
