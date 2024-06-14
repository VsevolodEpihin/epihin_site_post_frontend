export interface User{
  id: number,
  login: string,
  email: string,
  imageUrl:string | null
}

export interface Tags{
  id: number,
  text: string,
}

export interface Posts{
  id: number,
  title: string,
  text: string,
  imageUrl: string | null
  user: User,
  tags: Tags[]
}

export interface PostsState {
  posts: Posts[];
  isLoading: boolean;
  error: string | null;
}

export type PostAction = {
  type: string,
  payload?: Posts[] | string
}
