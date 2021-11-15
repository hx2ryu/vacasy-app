import {all, takeLatest} from '@redux-saga/core/effects';
import {requestSearchWord} from './slice';

function* fetchSearchResult() {}

export function* searchSaga() {
  yield all([takeLatest(requestSearchWord, fetchSearchResult)]);
}
