export interface PostInterface {
  id: string;
  title: string;
  author?: string;
  createAt: number;
  modifiedAt: number;
  content: string;
}
