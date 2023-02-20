import { ApiGetPostsSuccessResponse } from './types';

const getPosts = async (limit: number) => {
  const response: ApiGetPostsSuccessResponse = await (await fetch(`https://dummyjson.com/posts?limit=${limit}`)).json();

  return response;
};

export const postsApi = {
  getPosts,
};
