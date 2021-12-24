import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {COLORS, DEVICE_SIZE} from '@/theme';
import {WordInfo} from '@/api/types';
import {WordCard} from '../molecules';
import {HomeNavigationProps} from '@/navigation/types';

type Props = {
  data: Array<WordInfo>;
  navigation: HomeNavigationProps;
};
const Wordbook: React.FC<Props> = ({data, navigation}) => {
  const handleShowDetailInfo = (selectedItem: WordInfo) => {
    navigation.navigate('DetailInfo', {
      data: selectedItem,
    });
  };

  return (
    <FlatList
      style={styles.list}
      data={data}
      bounces={false}
      renderItem={({item, index}) => (
        <WordCard
          data={item}
          index={index}
          key={index}
          onPress={handleShowDetailInfo}
        />
      )}
    />
  );
};

export default Wordbook;

const styles = StyleSheet.create({
  list: {
    width: DEVICE_SIZE.width - 32,
    backgroundColor: COLORS.black[800],
    borderRadius: 10,
    marginVertical: 10,
  },
});
