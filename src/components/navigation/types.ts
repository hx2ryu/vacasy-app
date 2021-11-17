import {WordCardProps} from '../molecules/WordCard';

type RootParamList = {
  Home: undefined;
  Search: undefined;
  // DictionaryDetail: Array<WordCardProps>;
  DictionaryDetail: WordCardProps;
};

export type {RootParamList};
