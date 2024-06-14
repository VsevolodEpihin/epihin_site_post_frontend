import styles from './TagItem.module.css';

interface TagsProps {
  key:number,
  text: string,
}

const TagItem = ({ text }: TagsProps) => {
  return(
    <>
      <span className={styles.tag}>{text}</span>
    </>
  );
};

export default TagItem;
