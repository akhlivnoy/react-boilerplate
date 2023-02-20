import _ from 'lodash';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '#hooks';
import { postsSlice } from '#redux/slices';

import styles from './Posts.module.scss';

export const PostsPage: React.ComponentType = () => {
  const { posts } = useAppSelector(state => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!posts.length) {
      dispatch(postsSlice.actions.getPosts({ limit: 5 }));
    }
  }, [dispatch, posts.length]);

  return (
    <div>
      {posts.length ? (
        _.map(posts, post => (
          <Link
            className={styles.link}
            key={post.id}
            to={`${post.id}`}
          >
            {post.id}. {post.title}
          </Link>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
