import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

export const dictionaryApi = createApi({
  reducerPath: 'dictionary',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.DICTIONARY_API,
  }),
  endpoints: build => ({
    searchWord: build.query<Array<Word>, string>({
      query: keyword => `/v2/entries/en/${keyword}`,
    }),
  }),
});

export const {useSearchWordQuery} = dictionaryApi;
export default dictionaryApi;
