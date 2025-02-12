export interface Blog {
  _id: string;
  title?: string;
  description?: string;
  author?: string;
  blogImage: string;
  name: Author | null;
}

export interface Author {
  name: string;
}
