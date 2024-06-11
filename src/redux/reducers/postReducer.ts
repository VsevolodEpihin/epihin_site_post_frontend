import { PostsState, PostsActionTypes } from '../actionTypes';
import { FETCH_POSTS_REQUEST, FETCH_POSTS_FAIL, FETCH_POSTS_SUCCESS } from '../actions/actionPosts';

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action: PostsActionTypes): PostsState => {
  switch(action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case FETCH_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default postReducer;
