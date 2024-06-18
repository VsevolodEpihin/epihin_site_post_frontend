import { all } from 'redux-saga/effects';

import { watcherPostSaga } from './postSaga';

export default function * rootSaga(){
  yield all([
    watcherPostSaga(),
  ]);
}
