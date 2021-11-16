import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Word} from '../wordbook/slice';

type SearchState = {
  wordToSearch: string;
  searchResult: Array<Word> | undefined;
};

const initialState: SearchState = {
  wordToSearch: '',
  searchResult: undefined,
};

const searchSlice = createSlice({
  name: 'SEARCH',
  initialState,
  reducers: {
    requestSearchWord: (_, action: PayloadAction<{keyword: string}>) => {
      console.log('reducer');
      return {
        wordToSearch: action.payload.keyword,
        searchResult: undefined,
      };
    },
    successSearchWord: (_, action: PayloadAction<Array<Word>>) => {
      return {
        ...initialState,
        searchResult: action.payload,
      };
    },
  },
});

export const {requestSearchWord, successSearchWord} = searchSlice.actions;
export default searchSlice.reducer;
