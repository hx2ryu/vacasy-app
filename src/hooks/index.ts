import {useEffect, useRef, useState} from 'react';
import {Animated, StyleProp, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useGetSafeAreaStyle = () => {
  const {top, bottom} = useSafeAreaInsets();
  return {
    topSafeAreaStyle: {
      paddingTop: top > 16 ? top : 16,
    } as StyleProp<ViewStyle>,
    bottomSafeAreaStyle: {
      paddingBottom: bottom > 16 ? bottom : 16,
    } as StyleProp<ViewStyle>,
  };
};

export const useBindScrollPos = (useNativeDriver: boolean = false) => {
  const pos = useRef(new Animated.Value(0)).current;
  const handleBindScrollPos = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            x: pos,
          },
        },
      },
    ],
    {useNativeDriver},
  );

  return {pos, handleBindScrollPos};
};

type Direction = 'from-left' | 'from-right' | 'from-top' | 'from-bottom';
export const useAnimateToShowUp = (
  direction: Direction,
  duration: number = 1000,
) => {
  const initialValue =
    direction === 'from-right' || direction === 'from-left' ? -100 : -50;
  const pos = useRef(new Animated.Value(initialValue)).current;
  useEffect(() => {
    Animated.timing(pos, {
      toValue: 0,
      duration,
      useNativeDriver: false,
    }).start();
  }, [pos, duration]);

  return {pos};
};

export const useInput = (initialValue: string = '') => {
  const [value, setValue] = useState<string>(initialValue);
  const [clearButtonVisible, setClearButtonVisible] = useState<boolean>(false);
  const handleChangeText = (text: string) => {
    setValue(text);
    setClearButtonVisible(text !== '');
  };
  const handleClearText = () => {
    handleChangeText('');
  };

  return {value, clearButtonVisible, handleChangeText, handleClearText};
};
