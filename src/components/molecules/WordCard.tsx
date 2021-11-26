import {COLORS} from '@/constants/theme';
import {useAppDispatch} from '@/store/hooks';
import {getThumbnailMeaning} from '@/utils/word';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../atoms';

export type WordCardProps = {
  word: Word;
  dotColor: string;
};
const WordCard: React.FC<WordCardProps> = ({dotColor, word}) => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.root}>
      <View style={styles.middleWrapper}>
        <View style={[styles.dot, {backgroundColor: dotColor}]} />
        <View style={styles.textWrapper}>
          <Text type={'h4'} style={styles.text}>
            {word?.word}
          </Text>
          <Text type={'p'} style={styles.text}>
            {getThumbnailMeaning(word)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WordCard;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 16,
    borderColor: COLORS.grayscale[700],
  },
  middleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: COLORS.grayscale[700],
  },
  textWrapper: {
    marginLeft: 16,
    width: '80%',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
