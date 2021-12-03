import {storeDataIntoStorage} from '@/storage';
import {RootState} from '@/store';
import {extractOnlyDateFromLocaleString} from '@/utils/date';
import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
  nanoid,
} from '@reduxjs/toolkit';

const adapter = createEntityAdapter<Wordbook>({
  selectId: state => state.date,
  sortComparer: (a, b) => a.date.localeCompare(b.date),
});

const wordbookSlice = createSlice({
  name: 'wordbook',
  initialState: adapter.getInitialState(),
  reducers: {
    addWord: {
      reducer: (
        state,
        {
          payload: {date, word},
        }: PayloadAction<{date: string; word: FilteredWordInfo}>,
      ) => {
        const isNotContained =
          state.entities[date]?.wordList?.find(_ => _.word === word.word) ===
          undefined;
        if (isNotContained) {
          const wordList = state.entities[date]
            ? state.entities[date]?.wordList?.concat(word)
            : [word];
          const updatedWordbook = {
            date,
            wordList: wordList,
          };

          adapter.setMany(state, {
            [date]: updatedWordbook,
          });
          storeDataIntoStorage(date, wordList);
        }
      },
      prepare: (wordInfo: FilteredWordInfo) => {
        const now = new Date();
        return {
          payload: {
            date: now.toLocaleDateString(),
            word: {
              ...wordInfo,
              id: nanoid(),
              timestamp: now.toLocaleString(),
            } as FilteredWordInfo,
          },
        };
      },
    },
    removeWord: (
      state,
      {payload: {word}}: PayloadAction<{word: FilteredWordInfo}>,
    ) => {
      const date = extractOnlyDateFromLocaleString(word.timestamp!);
      if (date) {
        const wordList = state.entities[date]?.wordList?.filter(_ => {
          return _.id !== word.id;
        });

        const updatedWordbook = {
          date,
          wordList: wordList,
        };

        adapter.setMany(state, {
          [date]: updatedWordbook,
        });
        storeDataIntoStorage(date, wordList);
      }
    },
    loadWordbook: adapter.setOne,
  },
});

export const {addWord, removeWord, loadWordbook} = wordbookSlice.actions;
export default wordbookSlice.reducer;

export const wordBookSelector = adapter.getSelectors<RootState>(
  state => state.wordbook,
);
