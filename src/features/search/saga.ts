import {useGetSearchedResultQuery} from '@/store/api';
import {SearchResult} from '@/store/types';
import {all, call, takeLatest} from '@redux-saga/core/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {requestSearchWord} from './slice';

function* fetchSearchResult(action: PayloadAction<{keyword: string}>) {
  console.log('saga');
  const {keyword} = action.payload;
  const response: SearchResult = yield call(useGetSearchedResultQuery, keyword);

  console.log(response);
}

export function* searchSaga() {
  yield all([takeLatest(requestSearchWord.type, fetchSearchResult)]);
}
