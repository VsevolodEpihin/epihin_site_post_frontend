export interface Posts{
  id: number,
  user_id: number,
  title: string,
  text: string,
  imageUrl?: string
}

export interface PostsListProps{
  posts: Posts[]
}
