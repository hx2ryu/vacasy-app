import {RootState} from '@/store';
import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
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
        {payload: {date, word}}: PayloadAction<{date: string; word: Word}>,
      ) => {
        const updatedWordList = state.entities[date]
          ? state.entities[date]?.wordList.concat(word)
          : [word];
        adapter.setOne(state, {
          date,
          wordList: updatedWordList!,
        });
      },
      prepare: (word: Word) => {
        return {
          payload: {
            date: new Date().toDateString(),
            word,
          },
        };
      },
    },
    removeWord: (state, {payload: {word}}: PayloadAction<{word: Word}>) => {
      const key = word.timestamp.toDateString();
      const updatedWordList = state.entities[key]?.wordList.filter(_ => {
        return _.timestamp !== word.timestamp;
      });
      adapter.setOne(state, {
        date: key,
        wordList: updatedWordList!,
      });
    },
  },
});

export const {addWord, removeWord} = wordbookSlice.actions;
export default wordbookSlice.reducer;

export const wordBookSelector = adapter.getSelectors<RootState>(
  state => state.wordbook,
);
