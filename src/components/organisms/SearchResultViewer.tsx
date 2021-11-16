import {COLORS} from '@/constants/theme';
import {useGetSearchedResultQuery} from '@/store/api';
import {getDotColor} from '@/utils';
import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {Wordbook} from '.';
import DictionaryCard from './DictionaryCard';

type Props = {
  searchKeyword: string;
};
const SearchResultViewer: React.FC<Props> = ({searchKeyword}) => {
  const {data, error, isLoading} = useGetSearchedResultQuery(searchKeyword);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <DictionaryCard
              wordCardProps={{
                word: item.word,
                description: item.phonetic,
                dotColor: getDotColor(index),
              }}
            />
          )}
        />
      )}
    </View>
  );
};

export default SearchResultViewer;

const styles = StyleSheet.create({});
