import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import {rootSaga} from '@/features';
import searchReducer from '@/features/search/slice';
import wordReducer from '@features/wordbook/slice';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    search: searchReducer,
    word: wordReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
