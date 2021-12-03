import {COLORS, FONTS, ICONS} from '@/constants/theme';
import React, {useRef, useState} from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {Text} from '../atoms';

type Props = {
  left: Animated.Value;
  top: Animated.Value;
  opacity: Animated.Value;
  onChangeText: (text: string) => void;
  onNavigate: () => void;
};
const SearchContainer: React.FC<Props> = ({
  left,
  top,
  opacity,
  onChangeText,
  onNavigate,
}) => {
  const [isRemoverButtonShowed, setIsRemoverButtonShowed] =
    useState<boolean>(false);
  const ref = useRef<TextInput>(null);
  const handleClear = () => {
    ref.current?.clear();
    setIsRemoverButtonShowed(false);
  };

  const handleChangeText = (text: string) => {
    onChangeText(text);

    setIsRemoverButtonShowed(text !== '');
  };

  return (
    <Animated.View style={[styles.root, {top, left, opacity}]}>
      <View style={styles.inputWrapper}>
        <View style={styles.inputSubWrapper}>
          <Image source={ICONS.search} style={styles.icon} />
          <TextInput
            ref={ref}
            autoFocus
            placeholder={'search a word.'}
            placeholderTextColor={COLORS.grayscale[400]}
            style={styles.textInput}
            onChangeText={handleChangeText}
          />
        </View>
        {isRemoverButtonShowed && (
          <Pressable onPress={handleClear}>
            <Image source={ICONS.close} style={styles.icon} />
          </Pressable>
        )}
      </View>

      <Pressable onPress={onNavigate} style={styles.navigationButton}>
        <Text type={'h4'} style={styles.cancelText}>
          Cancel
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export default SearchContainer;

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 16,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: COLORS.grayscale[800],
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  inputSubWrapper: {flexDirection: 'row', alignItems: 'center'},
  textInput: {
    ...FONTS.h2,
    color: 'white',
    marginLeft: 10,
    paddingBottom: 5,
    maxWidth: '80%',
  },
  navigationButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  cancelText: {color: COLORS.grayscale[400]},
  icon: {
    tintColor: COLORS.grayscale[400],
  },
});
