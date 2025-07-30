// src/types.ts

export interface Post {
  slug: string;
  data: {
    title: string;
    description: string;
    pubDate: string;
    image?: string;
  };
}
