import { Posts } from '../../types';
import Post from '../PostItem/PostItem';
import PostNotFound from '../PostNotFound/PostNotFound';

import styles from './PostList.module.css';

export interface PostsListProps {
  posts: Posts[],
}

const PostList = ({ posts }: PostsListProps) => {
  return(
    <>
      <div className={styles.container}>
        {posts.length === 0 &&  <PostNotFound />}
        {posts.map(post => (
          <Post
            key={post.id}
            title={post.title}
            text={post.text}
            imageUrl={post.imageUrl}
            user={post.user}
            tags={post.tags}
          />
        ))}
      </div>
    </>
  );
};

export default PostList;
