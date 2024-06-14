import { Posts } from '../../types';

import styles from './PostNotFound.module.css';

export interface PostsListProps {
  posts: Posts[],
}

const PostNotFound = () => {
  return(
    <>
      <div className={styles.boxNotFound}>Not Found Posts</div>
    </>
  );
};

export default PostNotFound;
