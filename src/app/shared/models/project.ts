export interface Project {
  id: number;
  title: string;
  imageUrls: { [key: string]: string };
  client: string;
  services: string[];
  duration: string;
  description: string;
  tecnologies: Tecnology[];
}

export interface Tecnology {
  id: number;
  name: string;
  progress: number;
  logo: string;
}
