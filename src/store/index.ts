import {combineReducers, configureStore} from '@reduxjs/toolkit';
import searchReducer from '@/features/search/slice';
import wordReducer from '@/features/wordbook/slice';
import {dictionaryApi} from './api';

const rootReducer = combineReducers({
  [dictionaryApi.reducerPath]: dictionaryApi.reducer,
  search: searchReducer,
  word: wordReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(dictionaryApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
