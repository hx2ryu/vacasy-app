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

  return (
    <View
      style={[styles.root, style, {paddingTop: top, paddingBottom: bottom}]}>
      {keyword !== '' && (
        <FlatList
          style={styles.FlatList}
          data={data}
          renderItem={({item, index}) => {
            const existedItem = wordbook?.wordList?.find(
              _ => _.thumbnailDefinition === item.thumbnailDefinition,
            );
            const resultItem: FilteredWordInfo = existedItem
              ? {
                  ...item,
                  id: existedItem.id,
                  timestamp: existedItem.timestamp,
                }
              : item;
            return (
              <SearhResult
                item={resultItem}
                dotColor={getDotColor(index)}
                alreadyAdded={existedItem !== undefined}
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
