import { IPost } from '#models';

export type ApiGetPostsSuccessResponse = {
  posts: IPost[];
  total: number;
  skip: number;
  limit: number;
};
