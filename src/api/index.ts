import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import {WordInfo, WordResponse} from './types';

export const dictionaryApi = createApi({
  reducerPath: 'dictionary',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.DICTIONARY_API,
  }),
  endpoints: build => ({
    searchWord: build.query<Array<WordInfo>, string>({
      query: keyword => `/v2/entries/en/${keyword}`,
      transformResponse: (response: Array<WordResponse>) => {
        const filteredResponse = response.filter(wordItem => {
          if (wordItem?.meanings?.length > 0) {
            if (wordItem.meanings[0].definitions?.length > 0) {
              return true;
            }
          }
        });

        return filteredResponse.map(wordItem => {
          const thumbnailDescription =
            wordItem.meanings[0].definitions[0].definition;
          return {
            ...wordItem,
            isLiked: false,
            timestamp: new Date().toISOString(),
            thumbnailDescription,
            id: `${wordItem.word}-${thumbnailDescription}`,
          };
        });
      },
    }),
  }),
});

export const {useSearchWordQuery} = dictionaryApi;
export default dictionaryApi;
