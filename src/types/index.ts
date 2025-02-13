export interface Blog {
  _id: string;
  title?: string;
  description?: string;
  author?: { name?: string };
  blogImage: string;
}
export interface Project {
  _id: string;
  title?: string;
  description?: string;
  author?: { name?: string };
  projectImage: string;
  liveLinkUrl: string;
}
