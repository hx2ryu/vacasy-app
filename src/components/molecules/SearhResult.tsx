import {ICONS} from '@/constants/theme';
import {addWord, removeWord} from '@/features/wordbook/slice';
import {useAppDispatch} from '@/store/hooks';
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
  item: FilteredWordInfo;
  dotColor: string;
  alreadyAdded: boolean;
}
const SearhResult: React.FC<Props> = ({item, dotColor, alreadyAdded}) => {
  const dispatch = useAppDispatch();
  const handleAddWordIntoWordbook = () => {
    if (alreadyAdded === false) {
      dispatch(addWord(item));
    } else {
      dispatch(
        removeWord({
          word: item,
        }),
      );
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.middleWrapper}>
        <View style={[styles.dot, {backgroundColor: dotColor}]} />
        <View style={styles.wordWrapper}>
          <Text type={'h6'} style={styles.text}>
            {item.word}
          </Text>
          <Text type={'blockQuote2'} style={styles.text}>
            {item.thumbnailDefinition}
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
