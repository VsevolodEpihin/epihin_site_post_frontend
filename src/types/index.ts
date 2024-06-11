export interface User{
  id: number,
  login: string,
  email: string,
  imageUrl?:string | null
}

export interface Tags{
  id: number,
  text: string,
}

export interface PostsListProps{
  posts: Posts[],
}

export interface Posts{
  id: number,
  title: string,
  text: string,
  imageUrl?: string | null
  user: User,
  tags: Tags[]
}
