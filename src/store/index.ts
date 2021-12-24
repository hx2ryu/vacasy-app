import {combineReducers, configureStore} from '@reduxjs/toolkit';
import wordbookReducer from '@features/wordbook';
import dictionaryApi from '@/api';

const rootReducer = combineReducers({
  [dictionaryApi.reducerPath]: dictionaryApi.reducer,
  wordbook: wordbookReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(dictionaryApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
