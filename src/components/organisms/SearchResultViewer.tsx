import {useSearchWordQuery} from '@/api';
import {wordBookSelector} from '@/features/wordbook/slice';
import {useAppSelector} from '@/store/hooks';
import {getDotColor} from '@/utils';
import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SearhResult} from '../molecules';

type Props = {
  keyword: string;
};
const SearchResultViewer: React.FC<Props> = ({keyword}) => {
  const {data} = useSearchWordQuery(keyword);
  // const wordbook = useAppSelector(wordBookSelector.selectById);
  // const wordList = data?.map(_ => _.word);

  return (
    <View style={[styles.root]}>
      <FlatList
        style={styles.FlatList}
        data={data}
        renderItem={({item, index}) => {
          return (
            <SearhResult
              content={item}
              dotColor={getDotColor(index)}
              alreadyAdded={false}
            />
          );
        }}
      />
    </View>
  );
};

export default SearchResultViewer;

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 32,
    marginTop: 30,
  },
  FlatList: {
    borderRadius: 10,
  },
});
