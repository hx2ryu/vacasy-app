import React from 'react';
import {useSearchWordQuery} from '@/api';
import {FlatList, View} from 'react-native';
import {LoadingIndicator} from '../atoms';
import {WordCard} from '../molecules';
import {WordInfo} from '@/api/types';
import {SearchNavigationProps} from '@/navigation/types';
import {wordbookSelector} from '@/features/wordbook';
import {useAppSelector} from '@/store/hooks';

type Props = {
  keyword: string;
  navigation: SearchNavigationProps;
};
const SearchResult: React.FC<Props> = ({keyword, navigation}) => {
  const {data, isLoading} = useSearchWordQuery(keyword);
  const wordbooks = useAppSelector(state => wordbookSelector.selectAll(state));

  const handleNavigateToDetailInfo = (selectedItem: WordInfo) => {
    navigation.navigate('DetailInfo', {data: selectedItem});
  };

  return (
    <View>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            const isLiked = wordbooks.some(wordbookItem =>
              wordbookItem.wordbook.some(_ => _.id === item.id),
            );
            return (
              <WordCard
                data={{...item, isLiked}}
                index={index}
                key={index}
                onPress={handleNavigateToDetailInfo}
              />
            );
          }}
        />
      )}
    </View>
  );
};

export default SearchResult;
