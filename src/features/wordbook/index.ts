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
    wordAdded: {
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
              isLiked: true,
            },
          },
        };
      },
    },
    wordRemoved: {
      reducer: (
        state,
        {payload: {date, id}}: PayloadAction<{date: string; id: string}>,
      ) => {
        const newWordbook = state.entities[date]?.wordbook.filter(
          _ => _.id !== id,
        );
        if (newWordbook) {
          adapter.setOne(state, {date, wordbook: newWordbook});
        } else {
          adapter.removeOne(state, date);
        }
        storeDataIntoStorage(StorageKeys.wordbook, state.entities);
      },
      prepare: ({id, timestamp}: WordInfo) => {
        const date = new Date(timestamp).toDateString();
        return {
          payload: {
            date,
            id,
          },
        };
      },
    },
    wordbookRemoved: (
      state,
      {payload: {date}}: PayloadAction<{date: string}>,
    ) => {
      adapter.removeOne(state, date);
      storeDataIntoStorage(StorageKeys.wordbook, state.entities);
    },
    wordbookLoaded: adapter.setAll,
  },
});

export default wordbookSlice.reducer;
export const {wordAdded, wordRemoved, wordbookRemoved, wordbookLoaded} =
  wordbookSlice.actions;
export const wordbookSelector = adapter.getSelectors<RootState>(
  state => state.wordbook,
);
