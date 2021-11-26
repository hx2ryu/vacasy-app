import {useSearchWordQuery} from '@/store/api';
import {getDotColor} from '@/utils';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearhResult, WordCard} from '../molecules';

type Props = {
  keyword: string;
};
const SearchResultViewer: React.FC<Props> = ({keyword}) => {
  const {data} = useSearchWordQuery(keyword);

  return (
    <View style={[styles.root]}>
      <FlatList
        style={styles.FlatList}
        data={data}
        renderItem={({item, index}) => (
          <SearhResult content={item} dotColor={getDotColor(index)} />
        )}
      />
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
