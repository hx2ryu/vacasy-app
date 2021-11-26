import {ICONS} from '@/constants/theme';
import {addWord} from '@/features/wordbook/slice';
import {useAppDispatch} from '@/store/hooks';
import {getThumbnailMeaning} from '@/utils/word';
import React from 'react';
import {
  TouchableOpacityProps,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Text} from '../atoms';

interface Props extends TouchableOpacityProps {
  content: Word;
  dotColor: string;
}
const SearhResult: React.FC<Props> = ({content, dotColor}) => {
  const dispatch = useAppDispatch();
  const handleAddWordIntoWordbook = () => {
    dispatch(
      addWord({
        ...content,
        timestamp: new Date(),
      }),
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.middleWrapper}>
        <View style={[styles.dot, {backgroundColor: dotColor}]} />
        <View style={styles.wordWrapper}>
          <Text type={'h4'} style={styles.text}>
            {content.word}
          </Text>
          <Text type={'p'} style={styles.text}>
            {getThumbnailMeaning(content)}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={handleAddWordIntoWordbook}>
        <Image source={ICONS.star} style={{tintColor: 'white'}} />
      </TouchableOpacity>
    </View>
  );
};

export default SearhResult;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 10,
  },
  middleWrapper: {flexDirection: 'row', alignItems: 'center'},
  wordWrapper: {width: '80%'},
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 16,
  },
  text: {
    color: 'white',
  },
});
