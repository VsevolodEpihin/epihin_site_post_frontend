import axios from 'axios';
import { Dispatch } from 'redux';

import { fetchPostsFail, fetchPostsSuccess } from '../actions/actionPosts';
import { Posts } from '../../types';
import { errorMessage } from '../../errorMessage';

export const fetchPostsRequest = async (dispatch: Dispatch) => {
  try {
    const response = await axios.get<Posts[]>(`${import.meta.env.VITE_API_URL}/posts`);
    dispatch(fetchPostsSuccess(response.data));
  } catch (error:unknown) {
    dispatch(fetchPostsFail(errorMessage));
  }
};
