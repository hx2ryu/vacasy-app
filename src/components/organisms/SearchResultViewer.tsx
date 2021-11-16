import {useGetSearchedResultQuery} from '@/store/api';
import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {Wordbook} from '.';

type Props = {
  searchKeyword: string;
};
const SearchResultViewer: React.FC<Props> = ({searchKeyword}) => {
  const {data, error, isLoading} = useGetSearchedResultQuery(searchKeyword);

  return (
    <View>
      {isLoading ? <ActivityIndicator /> : <Wordbook wordList={[]} />}
    </View>
  );
};

export default SearchResultViewer;

const styles = StyleSheet.create({});
