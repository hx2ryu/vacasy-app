import {COLORS, FONTS, ICONS} from '@/constants/theme';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import {SearchResultViewer} from '../organisms';

const SearchPage: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('');
  const handleSearchKeyword = (text: string) => {
    setKeyword(text);
  };

  const xPos = useRef(new Animated.Value(100)).current;
  const yPos = useRef(new Animated.Value(150)).current;

  useEffect(() => {
    const xAnim = Animated.timing(xPos, {
      toValue: 30,
      duration: 700,
      useNativeDriver: false,
    });
    const yAnim = Animated.timing(yPos, {
      toValue: -20,
      duration: 800,
      useNativeDriver: false,
    });

    Animated.sequence([yAnim, xAnim]).start();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.root}>
      <Animated.View
        style={[
          styles.searchWrapper,
          {
            top: yPos,
            left: xPos,
          },
        ]}>
        <Image source={ICONS.search} style={styles.icon} />
        <TextInput
          autoFocus
          placeholder={'search your word.'}
          placeholderTextColor={COLORS.grayscale[400]}
          style={styles.textInput}
          onChangeText={handleSearchKeyword}
        />
      </Animated.View>
      <SearchResultViewer keyword={keyword} />
    </KeyboardAvoidingView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.grayscale[600],
    justifyContent: 'center',
  },
  searchWrapper: {
    position: 'absolute',
    left: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    ...FONTS.h2,
    color: 'white',
    marginLeft: 10,
    paddingBottom: 5,
  },
  icon: {
    tintColor: COLORS.grayscale[400],
  },
});
