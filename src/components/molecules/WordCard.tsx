import {COLORS, ICONS} from '@/constants/theme';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Button, Text} from '../atoms';
// import Animated, {LightSpeedInLeft} from 'react-native-reanimated';

export type WordCardProps = {
  word: string;
  description: string;
  dotColor: string;
};
const WordCard: React.FC<WordCardProps> = props => {
  return (
    <View style={styles.root}>
      <View style={styles.middleWrapper}>
        <View style={[styles.dot, {backgroundColor: props.dotColor}]} />
        <View style={styles.textWrapper}>
          <Text type={'h4'}>{props.word}</Text>
          <Text type={'p'}>{props.description}</Text>
        </View>
      </View>

      <Button
        onPress={() => {
          console.log('press');
        }}>
        <Image source={ICONS.star} />
      </Button>
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
    borderColor: COLORS.grayscale[700],
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
