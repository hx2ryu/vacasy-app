import {Wordbook} from '@/components/organisms';
import {RootState} from '@/store';
import {getDateString} from '@/utils/date';
import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

const wordbookAdapter = createEntityAdapter<Wordbook>({
  selectId: state => state.date,
  sortComparer: (a, b) => a.date.localeCompare(b.date),
});

const wordbookSlice = createSlice({
  name: 'wordbook',
  initialState: wordbookAdapter.getInitialState(),
  reducers: {
    addWordIntoWordbook: {
      reducer: (
        state,
        {payload: {date, word}}: PayloadAction<{date: string; word: Word}>,
      ) => {
        const updatedWordList = state.entities[date]
          ? state.entities[date]?.wordList.concat(word)
          : [word];
        wordbookAdapter.setOne(state, {
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
    // addWord: (state, action: PayloadAction<{date: string; word: Word}>) => {
    //   const {date, word} = action.payload;
    //   state.ids.push(date);
    //   state.entities[date]?.wordList.push(word);
    //   console.log(state);
    // },
    removeWord: wordbookAdapter.removeOne,
  },
});

export const {addWordIntoWordbook, removeWord} = wordbookSlice.actions;
export default wordbookSlice.reducer;

export const wordBookSelector = wordbookAdapter.getSelectors<RootState>(
  state => state.wordbook,
);
