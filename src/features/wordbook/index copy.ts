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
  wordbook: Array<WordInfo>;
};
const adapter = createEntityAdapter<WordbookState>({
  selectId: state => state.date,
});
const wordbookSlice = createSlice({
  name: 'wordbook',
  initialState: adapter.getInitialState(),
  reducers: {
    wordbookAdded: {
      reducer: (
        state,
        {payload: {date, item}}: PayloadAction<{date: string; item: WordInfo}>,
      ) => {
        const olbWordbook = state.entities[date];
        const newWordbook = olbWordbook
          ? olbWordbook.wordbook.concat(item)
          : [item];
        adapter.setOne(state, {date, wordbook: newWordbook});
      },
      prepare: (wordInfo: WordInfo) => {
        const now = new Date();
        return {
          payload: {
            date: now.toDateString(),
            item: {
              ...wordInfo,
              timestamp: now.toISOString(),
              isLiked: true,
            },
          },
        };
      },
    },
    wordbookRemoved: (state, {payload: {id}}: PayloadAction<{id: string}>) => {
      adapter.removeOne(state, id);
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
