import notImage from '../../image/no-photo.png';
import { PostsListProps } from '../../types';

import styles from './PostList.module.css';

const PostList: React.FC<PostsListProps> = ({ posts }) => {
  return(<>
    <div className={styles.container}>
      {posts.map(post => (
        <div
          key={post.id}
          className={styles.post}
        >
          {(post.imageUrl) ?
            <img
              src={post.imageUrl}
              alt="ImagePost"
            />
            :
            <img
              src={notImage}
              alt="ImagePost"
              height={400}
            />}
          <h2>{post.title}</h2>
          <p className={styles.textPost}>{post.text}</p>
          <div className={styles.tagsContainer}>
            <p>Author: <span>{post.user.login}</span></p>
            <div>
              {post.tags.map(tag => (
                <span
                  className={styles.tag}
                  key={tag.id}
                >{tag.text}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
  );
};

export default PostList;
