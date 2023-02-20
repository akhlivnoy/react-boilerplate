import { useAppParams } from '#hooks/useAppParams';

export const PostPage: React.ComponentType = () => {
  const params = useAppParams();

  return <div>Post {params.postId}</div>;
};
