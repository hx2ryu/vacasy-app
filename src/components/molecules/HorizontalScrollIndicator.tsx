import {COLORS, DEVICE_SIZE} from '@/constants/theme';
import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';

type Props = {
  scrollX: Animated.AnimatedInterpolation;
  pageCount: number;
};
const HorizontalScrollIndicator: React.FC<Props> = ({scrollX, pageCount}) => {
  const dotPosition = Animated.divide(scrollX, DEVICE_SIZE.width);
  const inputRange = Array<number>(pageCount)
    .fill(0)
    .map((_, index) => index);

  return (
    <View style={styles.root}>
      {inputRange.length > 1 &&
        inputRange.map(_ => {
          const backgroundColor = dotPosition.interpolate({
            inputRange,
            outputRange: inputRange.map(i =>
              i === _ ? COLORS.grayscale[700] : COLORS.grayscale[400],
            ),
          });
          return (
            <Animated.View style={[styles.dot, {backgroundColor}]} key={_} />
          );
        })}
    </View>
  );
};

export default HorizontalScrollIndicator;

const styles = StyleSheet.create({
  root: {
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
    backgroundColor: COLORS.grayscale[700],
  },
});
