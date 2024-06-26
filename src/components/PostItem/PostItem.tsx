import { Tag, User } from '../../types';

import { Tags } from './index'
import styles from './PostItem.module.css';

interface PostProps {
  title: string,
  text: string,
  imageUrl: string | null,
  user: User,
  tags: Tag[]
}

const Post = ({
  imageUrl,
  title,
  text,
  user,
  tags
} : PostProps) => {
  return(
      <div className={styles.post}>
        <img
          src={imageUrl || './no-photo.png'}
          alt="ImagePost"
        />
        <h2>{title}</h2>
        <p className={styles.textPost}>{text}</p>
        <div className={styles.tagsContainer}>
          <p>Author: <span>{user.login}</span></p>
          <div>
          <Tags tags={tags} />
          </div>
        </div>
      </div>
  );
};

export default Post;
