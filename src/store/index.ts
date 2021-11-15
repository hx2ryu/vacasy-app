import {configureStore} from '@reduxjs/toolkit';
import reducer from '@/features';
import createSagaMiddleware from '@redux-saga/core';
import {rootSaga} from '@/features';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
