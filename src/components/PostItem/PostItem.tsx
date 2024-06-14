import notImage from '../../image/no-photo.png';
import { Tags, User } from '../../types';
import TagItem from '../TagItem/TagItem';

import styles from './PostItem.module.css';

interface PostsListProps {
  title: string,
  text: string,
  imageUrl: string | null,
  user: User,
  tags: Tags[]
}

const Post = ({ imageUrl, title, text, user, tags }: PostsListProps) => {
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
          <div>
            {tags.map(tag => (
              <TagItem
                key={tag.id}
                text={tag.text}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
