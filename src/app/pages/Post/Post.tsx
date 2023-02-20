import _ from 'lodash';
import { useEffect, useState } from 'react';

import { useAppParams, useAppSelector } from '#hooks';
import { IPost } from '#models';
import { Paths } from '#navigation/routes';
import { Navigator } from '#services/navigator';
import { Nullable } from '#types/nullable';

export const PostPage: React.ComponentType = () => {
  const { postId } = useAppParams();
  const [post, setPost] = useState<Nullable<IPost>>(null);

  const { posts } = useAppSelector(state => state.posts);

  useEffect(() => {
    const tempPost = _.find(posts, item => item.id === Number(postId));

    if (tempPost) {
      setPost(tempPost);
    } else {
      Navigator.navigate(Paths.Posts);
    }
  }, [postId, posts]);

  return (
    post && (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    )
  );
};
