import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { Posts } from '../../types';
import { fetchPostsSuccess, fetchPostsFail, FETCH_POSTS_REQUEST } from '../actions/actionPosts';

const fetchPostsFromApi = async () => {
  const response = await axios.get('http://localhost:3000/posts/');
  return response.data;
};

function* workerPostSaga() {
  try {
    const posts: Posts[] = yield call(fetchPostsFromApi);
    yield put(fetchPostsSuccess(posts));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchPostsFail(error.message));
    } else {
      yield put(fetchPostsFail(String(error)));
    }
  }
}

export function* watcherPostSaga() {
  yield takeLatest(FETCH_POSTS_REQUEST, workerPostSaga);
}
