import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { errorMessage } from '../../errorMessage';
import { fetchPostsSuccess, fetchPostsFail } from '../actions/actionPosts';
import { FETCH_POSTS_REQUEST } from '../actionTypes';
import { fetchPostsRequest } from '../api/postsApi';

function* workerPostSaga() {
  try {
    const { data } = yield call(fetchPostsRequest);
    yield put(fetchPostsSuccess(data));
  } catch (error: unknown) {
    const currentError = (error instanceof AxiosError)
      ? error.response?.data?.message
      : errorMessage;
    console.log(currentError);
    yield put(fetchPostsFail(currentError));
  }
}

export function* watcherPostSaga() {
  yield takeLatest(FETCH_POSTS_REQUEST, workerPostSaga);
}
