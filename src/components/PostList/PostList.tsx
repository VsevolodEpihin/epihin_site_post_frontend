import { PostsListProps } from "../types"

import PostStyle from "./PostList.module.css"

const PostList: React.FC<PostsListProps> = ({ posts }) => {
  return(
    <div className={PostStyle.container}>
    {posts.map(post => (
      <div key={post.id} className={PostStyle.post}>
        <h2>{post.title}</h2>
        <p>{post.text}</p>
      </div>
    ))}
  </div>
  )
}

export default PostList