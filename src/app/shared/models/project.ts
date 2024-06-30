export interface Project {
  id: number;
  title: string;
  imageUrls: string[];
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
