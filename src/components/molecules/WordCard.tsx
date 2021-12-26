import React, {useMemo} from 'react';
import {WordInfo} from '@/api/types';
import {getDotColor} from '@/utils/theme';
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
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
  themeType: 'light' | 'dark';
  onPress: (data: WordInfo) => void;
};
const WordCard: React.FC<Props> = ({index, data, themeType, onPress}) => {
  const dispatch = useAppDispatch();
  const {borderLineStyle, textColorStyle, likeIconStyle, dotStyle} = useMemo(
    () => ({
      borderLineStyle: {
        borderBottomColor:
          themeType === 'dark' ? COLORS.black[700] : COLORS.grayscale[100],
      } as StyleProp<ViewStyle>,
      textColorStyle: {
        color: themeType === 'dark' ? COLORS.black[700] : COLORS.grayscale[100],
      } as StyleProp<TextStyle>,
      likeIconStyle: {
        tintColor: data.isLiked ? COLORS.yellow : COLORS.grayscale[700],
      } as StyleProp<ImageStyle>,
      dotStyle: {
        backgroundColor: getDotColor(index),
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 16,
      } as StyleProp<ViewStyle>,
    }),
    [themeType, data.isLiked, index],
  );

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
      style={[styles.root, styles.rowDirection, borderLineStyle]}
      onPress={handlePress}>
      <View style={styles.rowDirection}>
        <View style={dotStyle} />
        <View style={styles.textWrapper}>
          <Text type={'h6'} style={textColorStyle}>
            {data.word}
          </Text>
          <Text
            type={'blockQuote2'}
            style={textColorStyle}
            ellipsizeMode="tail">
            {data.thumbnailDescription}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={handlePressLikeButton}
        style={styles.likeButton}>
        <Image source={ICONS.star} style={likeIconStyle} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default WordCard;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'space-between',
    padding: 16,
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
  likeButton: {
    padding: 10,
  },
});
