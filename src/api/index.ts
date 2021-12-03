import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

export const dictionaryApi = createApi({
  reducerPath: 'dictionary',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.DICTIONARY_API,
  }),
  endpoints: build => ({
    searchWord: build.query<Array<FilteredWordInfo>, string>({
      query: keyword => `/v2/entries/en/${keyword}`,
      transformResponse: (response: Array<Word>) => {
        return response.map(item => {
          const wordInfo: FilteredWordInfo = {
            word: '',
            phonetic: '',
            audio: undefined,
            meanings: [],
          };
          wordInfo.word = item.word;

          const phonetic = item.phonetics.find(_ => true);
          if (phonetic) {
            wordInfo.phonetic = phonetic.text;
            wordInfo.audio = phonetic.audio;
          }

          item.meanings.map(meaningItem => {
            const definition = meaningItem.definitions.find(_ => true);
            if (definition) {
              const meaning = {
                partOfSpeech: meaningItem.partOfSpeech,
                definition: definition.definition,
                example: definition.example,
              } as FilteredDefinition;

              wordInfo.meanings.push(meaning);
              if (!wordInfo.thumbnailDefinition) {
                wordInfo.thumbnailDefinition = definition.definition;
              }
            }
          });

          return wordInfo;
        });
      },
    }),
  }),
});

export const {useSearchWordQuery} = dictionaryApi;
export default dictionaryApi;
