import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type SearchState = {
  searchResult: Array<Word>;
};
const initialState: SearchState = {
  searchResult: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchResult: (state, action: PayloadAction<Array<Word>>) => {
      state.searchResult = action.payload;
    },
  },
});

export const {updateSearchResult} = searchSlice.actions;
export default searchSlice;
