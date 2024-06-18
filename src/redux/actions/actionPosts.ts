import { Posts } from '../../types';
import { FETCH_POSTS_FAIL, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from '../actionTypes';

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts: Posts[]) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFail = (error: string) => ({
  type: FETCH_POSTS_FAIL,
  payload: error,
});
