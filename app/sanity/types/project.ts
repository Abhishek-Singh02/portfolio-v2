export type ProjectType = {
  name: string;
  description: string;
  year: string;
  madeAt?: string;
  thumbnail: string;
  url: string;
  showOnHome?:boolean
  tags: string[];
};
