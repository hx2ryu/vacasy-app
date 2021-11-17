import {COLORS, ICONS} from '@/constants/theme';
import {useAppDispatch} from '@/store/hooks';
import React, {useCallback, useMemo} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, Text} from '../atoms';

export type WordCardProps = {
  word: string;
  description: string;
  dotColor: string;
  type?: 'search-result' | 'favorite';
};
const WordCard: React.FC<WordCardProps> = ({
  dotColor,
  word,
  description,
  type = 'favorite',
}) => {
  const dispatch = useAppDispatch();
  const addFavoriteWord = useCallback(() => {
    // dispatch()
  }, [dispatch]);

  const color = useMemo(() => {
    return type === 'search-result' ? 'white' : COLORS.grayscale[700];
  }, [type]);

  const showDetailInfo = useCallback(() => {}, []);

  return (
    <TouchableOpacity
      style={[
        styles.root,
        {
          borderColor: color,
        },
      ]}
      onPress={showDetailInfo}>
      <View style={styles.middleWrapper}>
        <View style={[styles.dot, {backgroundColor: dotColor}]} />
        <View style={styles.textWrapper}>
          <Text type={'h4'} style={{color}}>
            {word}
          </Text>
          <Text type={'p'} style={{color}}>
            {description}
          </Text>
        </View>
      </View>

      {type === 'search-result' && (
        <Button onPress={addFavoriteWord}>
          <Image source={ICONS.star} />
        </Button>
      )}
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
  },
  middleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrapper: {
    marginLeft: 16,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
