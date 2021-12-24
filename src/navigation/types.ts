import {WordInfo} from '@/api/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootParamList = {
  Home: undefined;
  Search: undefined;
  DetailInfo: {data: WordInfo};
};

export type SearchNavigationProps = NativeStackNavigationProp<
  RootParamList,
  'Search'
>;
// export type DetailNavigationProps = NativeStackNavigationProp<
//   RootParamList,
//   'DetailInfo'
// >;
