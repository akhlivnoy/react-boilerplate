import _ from 'lodash';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { IPost } from '#models';

import styles from './Posts.module.scss';

export const PostsPage: React.ComponentType = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      {_.map(posts, post => (
        <Link
          className={styles.link}
          key={post.id}
          to={`${post.id}`}
        >
          {post.id}. {post.title}
        </Link>
      ))}
    </div>
  );
};
