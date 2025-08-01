export interface Post {
  slug: string;
  data: {
    title: string;
    description: string;
    date: string;
    image?: string;
  };
  render: () => Promise<{ Content: any }>;
}
