import {useSearchWordQuery} from '@/api';
import {wordBookSelector} from '@/features/wordbook/slice';
import {useAppSelector} from '@/store/hooks';
import {getDotColor} from '@/utils';
import {contains} from '@/utils/word';
import React, {useEffect, useMemo} from 'react';
import {FlatList, StyleSheet, View, ViewStyle} from 'react-native';
import {SearhResult} from '../molecules';

type Props = {
  keyword: string;
  style: ViewStyle;
  focusedPageDate: string;
};
const SearchResultViewer: React.FC<Props> = ({
  keyword,
  focusedPageDate,
  style,
}) => {
  const {data} = useSearchWordQuery(keyword);
  const state = useAppSelector(state => state);
  const wordbook = wordBookSelector.selectById(state, focusedPageDate);

  const currentWordList: Array<string> | undefined = useMemo(() => {
    return wordbook?.wordList?.map(_ => _.word);
  }, [wordbook]);

  return (
    <View style={[styles.root, style]}>
      {keyword !== '' && (
        <FlatList
          style={styles.FlatList}
          data={data}
          renderItem={({item, index}) => {
            const alreadyAdded = contains(currentWordList, item.word);
            return (
              <SearhResult
                content={item}
                dotColor={getDotColor(index)}
                alreadyAdded={alreadyAdded}
              />
            );
          }}
        />
      )}
    </View>
  );
};

export default SearchResultViewer;

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  FlatList: {
    borderRadius: 10,
  },
});
