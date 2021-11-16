import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import {SearchResult} from './types';

export const dictionaryApi = createApi({
  reducerPath: 'DICTIONARY',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.DICTIONARY_API,
  }),
  endpoints: builder => ({
    getSearchedResult: builder.query<Array<SearchResult>, string>({
      query: keyword => `/v2/entries/en/${keyword}`,
      
    }),
  }),
});

export const {useGetSearchedResultQuery} = dictionaryApi;
