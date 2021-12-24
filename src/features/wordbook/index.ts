import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {WordInfo} from '@/api/types';
import {RootState} from '@/store';
import {StorageKeys, storeDataIntoStorage} from '@/storage';

type WordbookState = {
  date: string;
  wordBook: Array<WordInfo>;
};
const adapter = createEntityAdapter<WordInfo>({
  selectId: state => state.timestamp!,
});
const wordbookSlice = createSlice({
  name: 'wordbook',
  initialState: adapter.getInitialState(),
  reducers: {
    wordbookAdded: {
      reducer: (state, {payload}: PayloadAction<WordInfo>) => {
        adapter.addOne(state, payload);
        storeDataIntoStorage(StorageKeys.wordbook, state.entities);
      },
      prepare: (wordInfo: WordInfo) => ({
        payload: {
          ...wordInfo,
          timestamp: new Date().toISOString(),
          isLiked: true,
        },
      }),
    },
    wordbookRemoved: (
      state,
      {payload: {timestamp}}: PayloadAction<{timestamp: string}>,
    ) => {
      adapter.removeOne(state, timestamp);
      storeDataIntoStorage(StorageKeys.wordbook, state.entities);
    },
    wordbookAllRemoved: adapter.removeAll,
    wordbookLoaded: adapter.setAll,
  },
});

export default wordbookSlice.reducer;
export const {
  wordbookAdded,
  wordbookAllRemoved,
  wordbookRemoved,
  wordbookLoaded,
} = wordbookSlice.actions;
export const wordbookSelector = adapter.getSelectors<RootState>(
  state => state.wordbook,
);
