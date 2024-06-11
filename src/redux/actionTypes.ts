import { Posts } from '../types';
import { FETCH_POSTS_FAIL, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from './actions/actionPosts';

export interface PostsState {
  posts: Posts[];
  loading: boolean;
  error: string | null;
}

interface FetchPostsRequestAction {
  type: typeof FETCH_POSTS_REQUEST;
}

interface FetchPostsSuccessAction {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: Posts[];
}

interface FetchPostsFailAction {
  type: typeof FETCH_POSTS_FAIL;
  payload: string;
}

export type PostsActionTypes =
  | FetchPostsRequestAction
  | FetchPostsSuccessAction
  | FetchPostsFailAction;
