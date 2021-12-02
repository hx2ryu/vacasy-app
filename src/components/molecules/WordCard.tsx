import {COLORS, ICONS} from '@/constants/theme';
import {removeWord} from '@/features/wordbook/slice';
import {useAppDispatch} from '@/store/hooks';
import {getThumbnailMeaning} from '@/utils/word';
import {useNavigation} from '@react-navigation/core';
import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Animated,
  View,
  Image,
} from 'react-native';
import {Text} from '../atoms';

export type WordCardProps = {
  word: Word;
  dotColor: string;
};
const WordCard: React.FC<WordCardProps> = ({dotColor, word}) => {
  const dispatch = useAppDispatch();
  const right = useRef(new Animated.Value(-100)).current;
  const [isShowed, setIsShowed] = useState<boolean>(false);

  const navigation = useNavigation();

  const handleExpandMenu = () => {
    Animated.timing(right, {
      toValue: isShowed ? -70 : 20,
      duration: 700,
      useNativeDriver: false,
    }).start(() => {
      setIsShowed(flag => !flag);
    });
  };

  const handleShowDetailInfo = () => {
    navigation.navigate('DetailInfo', {
      word,
    });
  };

  const handleDelete = () => {
    dispatch(
      removeWord({
        word,
      }),
    );
  };

  return (
    <TouchableOpacity style={styles.root} onPress={handleExpandMenu}>
      <View style={styles.middleWrapper}>
        <View style={[styles.dot, {backgroundColor: dotColor}]} />
        <View style={styles.textWrapper}>
          <Text type={'h6'} style={styles.text}>
            {word?.word}
          </Text>
          <Text type={'blockQuote2'} style={styles.text}>
            {getThumbnailMeaning(word)}
          </Text>
        </View>

        <Animated.View style={[styles.moreMenuWrapper, {right}]}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleShowDetailInfo}>
            <Image source={ICONS.info} style={{tintColor: dotColor}} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleDelete}>
            <Image source={ICONS.close} style={{tintColor: dotColor}} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </TouchableOpacity>
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
    width: '70%',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  button: {
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: COLORS.grayscale[200],
  },
  moreMenuWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
    right: -10,
  },
});
