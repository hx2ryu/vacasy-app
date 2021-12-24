import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {DEVICE_SIZE} from '@/theme';
// import {WordCard} from '../molecules';
import {getDotColor} from '@/utils/theme';
import {WordInfo} from '@/api/types';
import {WordCard} from '../molecules';

type Props = {
  wordList: Array<WordInfo>;
};
const Wordbook: React.FC<Props> = ({wordList}) => {
  return (
    <FlatList
      style={styles.list}
      data={wordList}
      renderItem={({item, index}) => (
        <WordCard
          data={item}
          index={index}
          key={index}
          onPress={function (data: WordInfo): void {
            // throw new Error('Function not implemented.');
          }}
        />
      )}
    />
  );
};

export default Wordbook;

const styles = StyleSheet.create({
  list: {
    width: DEVICE_SIZE.width - 32,
  },
});
