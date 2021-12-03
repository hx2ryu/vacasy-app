import {useSearchWordQuery} from '@/api';
import {wordBookSelector} from '@/features/wordbook/slice';
import {useAppSelector} from '@/store/hooks';
import {getDotColor} from '@/utils';
import React, {useMemo} from 'react';
import {FlatList, StyleSheet, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
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
  const {top, bottom} = useSafeAreaInsets();
  const {data} = useSearchWordQuery(keyword);
  const state = useAppSelector(state => state);
  const wordbook = wordBookSelector.selectById(state, focusedPageDate);

  const currentWordList: Array<string> | undefined = useMemo(() => {
    return wordbook?.wordList?.map(_ => _.word);
  }, [wordbook]);

  return (
    <View
      style={[styles.root, style, {paddingTop: top, paddingBottom: bottom}]}>
      {keyword !== '' && (
        <FlatList
          style={styles.FlatList}
          data={data}
          renderItem={({item, index}) => {
            return (
              <SearhResult
                item={item}
                dotColor={getDotColor(index)}
                alreadyAdded={currentWordList?.some(_ => _ === item.word)!}
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
  },
  FlatList: {
    borderRadius: 10,
  },
});
