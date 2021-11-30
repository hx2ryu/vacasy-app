import {WordCardProps} from '@components/molecules/WordCard';

type RootParamList = {
  Home: undefined;
  Search: {wordbookKey: string};
  DictionaryDetail: WordCardProps;
};

export type {RootParamList};
