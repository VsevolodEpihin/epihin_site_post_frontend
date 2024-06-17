import notImage from '../../image/no-photo.png';
import { Tag, User } from '../../types';
import Tags from '../TagItem/Tag';

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
    <>
      <div className={styles.post}>
        <img
          src={imageUrl || notImage}
          alt="ImagePost"
        />
        <h2>{title}</h2>
        <p className={styles.textPost}>{text}</p>
        <div className={styles.tagsContainer}>
          <p>Author: <span>{user.login}</span></p>
          <Tags tags={tags} />
        </div>
      </div>
    </>
  );
};

export default Post;
