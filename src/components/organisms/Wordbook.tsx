import React from 'react';
import {Word} from '@/features/wordbook/slice';
import {FlatList, StyleSheet} from 'react-native';
import {COLORS, DEVICE_SIZE} from '@/constants/theme';
import {WordCard} from '../molecules';
import {getDotColor} from '@/utils';

type Props = {
  wordList: Array<Word>;
};
const Wordbook: React.FC<Props> = ({wordList}) => {
  return (
    <FlatList
      style={styles.list}
      data={wordList}
      renderItem={({item, index}) => (
        <WordCard
          word={item.word}
          description={item.description}
          dotColor={getDotColor(index)}
          key={index}
        />
      )}
    />
  );
};

export default Wordbook;

const styles = StyleSheet.create({
  list: {
    padding: 16,
    width: DEVICE_SIZE.width - 32,
  },
});
