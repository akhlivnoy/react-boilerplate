import { useEffect, useState } from 'react';

import { useAppParams } from '#hooks/useAppParams';
import { IPost } from '#models';
import { Nullable } from '#types/nullable';

export const PostPage: React.ComponentType = () => {
  const { postId } = useAppParams();
  const [post, setPost] = useState<Nullable<IPost>>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(async res => {
        if (!res.ok) {
          throw new Error('Something went wrong!');
        }

        const data = await res.json();
        setPost(data);
      })
      .catch(err => console.error(err));
  }, [postId]);

  return (
    post && (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    )
  );
};
