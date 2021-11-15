import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Word = {
  word: string;
  description: string;
};

type WordbookState = {
  wordList: Array<Word>;
};

const initialState: WordbookState = {
  wordList: [],
};

const wordbookSlice = createSlice({
  name: 'WORDBOOK',
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<Word>) => {
      return {
        ...state,
        wordList: state.wordList.concat(action.payload),
      };
    },
    removeWord: (state, action: PayloadAction<Word>) => {
      state.wordList = state.wordList.filter(item => {
        return item !== action.payload;
      });
    },
  },
});

export const {addWord, removeWord} = wordbookSlice.actions;
export default wordbookSlice.reducer;
