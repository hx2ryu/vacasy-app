import React from 'react';
import {WordInfo} from '@/api/types';
import {getDotColor} from '@/utils/theme';
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Text} from '../atoms';
import {COLORS, ICONS} from '@/theme';
import {useAppDispatch} from '@/store/hooks';
import {wordAdded, wordRemoved} from '@/features/wordbook';

type Props = {
  index: number;
  data: WordInfo;
  onPress: (data: WordInfo) => void;
};
const WordCard: React.FC<Props> = ({index, data, onPress}) => {
  const dispatch = useAppDispatch();
  const dotStyle: StyleProp<ViewStyle> = {
    backgroundColor: getDotColor(index),
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 16,
  };
  const starIconStyle: StyleProp<ImageStyle> = {
    tintColor: data.isLiked ? COLORS.yellow : COLORS.grayscale[700],
  };

  const handlePress = () => {
    onPress(data);
  };
  const handlePressLikeButton = () => {
    if (data.isLiked) {
      dispatch(wordRemoved(data));
    } else {
      dispatch(wordAdded(data));
    }
  };

  return (
    <TouchableOpacity
      style={[styles.root, styles.rowDirection]}
      onPress={handlePress}>
      <View style={styles.rowDirection}>
        <View style={dotStyle} />
        <View style={styles.textWrapper}>
          <Text type={'h6'} style={styles.wordText}>
            {data.word}
          </Text>
          <Text
            type={'blockQuote2'}
            style={styles.descriptionText}
            ellipsizeMode="tail">
            {data.thumbnailDescription}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={handlePressLikeButton}>
        <Image source={ICONS.star} style={starIconStyle} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default WordCard;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: COLORS.grayscale[100],
    borderBottomWidth: 0.5,
    maxHeight: 70,
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrapper: {
    width: '80%',
  },
  wordText: {
    color: COLORS.grayscale[100],
  },
  descriptionText: {
    color: COLORS.grayscale[100],
  },
});
