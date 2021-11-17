import {useGetSearchedResultQuery} from '@/store/api';
import {getDotColor} from '@/utils';
import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {WordCard} from '../molecules';

type Props = {
  searchKeyword: string;
};
const SearchResultViewer: React.FC<Props> = ({searchKeyword}) => {
  const {bottom} = useSafeAreaInsets();
  const {data, error, isLoading} = useGetSearchedResultQuery(searchKeyword);

  return (
    <View style={[styles.root, {bottom}]}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={styles.FlatList}
          data={data}
          renderItem={({item, index}) => (
            <WordCard
              word={item.word}
              description={item.phonetic}
              dotColor={getDotColor(index)}
              type="search-result"
            />
          )}
        />
      )}
    </View>
  );
};

export default SearchResultViewer;

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 32,
  },
  FlatList: {
    borderRadius: 10,
  },
});
