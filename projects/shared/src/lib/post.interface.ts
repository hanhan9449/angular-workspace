import {EditorDataInterface} from "./editor-data.interface";

export interface PostInterface extends EditorDataInterface {
  id: string;
  title: string;
  author?: string;
  createAt: number;
  modifiedAt: number;
  content: string;
}
