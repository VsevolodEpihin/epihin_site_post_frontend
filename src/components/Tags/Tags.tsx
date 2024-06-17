import { Tag } from "../../types";

import styles from './Tags.module.css';

interface TagsProps{
  tags: Tag[],
}

const Tags = ({ tags }: TagsProps) => {
  return(
    <>
      {tags.map(tag => (
        <span
          key={tag.id}
          className={styles.tag}
        >{tag.text}</span>
      ))}
    </>
  );
};

export default Tags;
