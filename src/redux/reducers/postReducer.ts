import { PostAction, PostsState } from "../../types";
import {
  FETCH_POSTS_FAIL,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "../actionTypes";

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postReducer = (state = initialState, action: PostAction): PostsState => {
  switch(action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: (action.payload !== undefined && typeof action.payload !== 'string')
          ?
          action.payload
          :
          initialState.posts,
      };
    case FETCH_POSTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: (typeof action.payload === 'string') ? action.payload : initialState.error
      };
    default:
      return state;
  }
};

export default postReducer;
