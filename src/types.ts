export interface Post {
  slug: string;
  data: {
    title: string;
    description: string;
    date: Date;
    image?: string;
  };
  render: () => Promise<{ Content: any }>;
}
