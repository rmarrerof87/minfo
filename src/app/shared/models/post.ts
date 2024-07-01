export interface Post {
  id: number;
  title: string;
  writenBy: string;
  category: string[];
  publicated: Date;
  description: string;
  imageUrls: { [key: string]: string };
  tags: string[];
  comments: Comment[];
}

export interface Comment {
  id: number;
  username: string;
  useravatar: string;
  created: Date;
  text: string;
}
