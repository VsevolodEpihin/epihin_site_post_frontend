import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { Posts } from '../../types';
import { errorMessage } from '../../errorMessage';
import { fetchPostsSuccess, fetchPostsFail } from '../actions/actionPosts';
import { FETCH_POSTS_REQUEST } from '../actionTypes';
import { fetchPostsFromApi } from '../api/postsApi';

function* workerPostSaga() {
  try {
    const posts: Posts[] = yield call(fetchPostsFromApi);
    yield put(fetchPostsSuccess(posts));
  } catch (error: unknown) {
    const currentError = (error instanceof AxiosError) ? error.message : errorMessage;
    console.log(currentError);
    yield put(fetchPostsFail(currentError));
  }
}

export function* watcherPostSaga() {
  yield takeLatest(FETCH_POSTS_REQUEST, workerPostSaga);
}
