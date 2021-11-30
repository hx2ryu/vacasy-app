import {ICONS} from '@/constants/theme';
import {addWord} from '@/features/wordbook/slice';
import {useAppDispatch} from '@/store/hooks';
import {getThumbnailMeaning} from '@/utils/word';
import React, {useState} from 'react';
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
  alreadyAdded: boolean;
}
const SearhResult: React.FC<Props> = ({content, dotColor, alreadyAdded}) => {
  const dispatch = useAppDispatch();
  const handleAddWordIntoWordbook = () => {
    if (alreadyAdded === false) {
      dispatch(
        addWord({
          ...content,
        }),
      );
    }
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
        {alreadyAdded ? (
          <Image
            source={ICONS['star-on']}
            style={{backgroundColor: 'white', borderRadius: 20}}
          />
        ) : (
          <Image source={ICONS['star-off']} />
        )}
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
