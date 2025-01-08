export type ExperienceType = {
  position: string;
  company: {
    name: string;
    url: string;
  };
  timeline: {
    start: string;
    end?: string;
  };
  description: string;
  tags:string[]
};
