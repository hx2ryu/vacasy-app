import {COLORS, FONTS, ICONS} from '@/constants/theme';
import {RootParamList} from '@/navigation/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchResultViewer} from '../organisms';

type Props = NativeStackScreenProps<RootParamList, 'Search'>;
const SearchPage: React.FC<Props> = ({navigation, route}) => {
  const inset = useSafeAreaInsets();
  const [keyword, setKeyword] = useState<string>('');

  const handleSearchKeyword = (text: string) => {
    setKeyword(text);
  };

  const handleNavigate = () => {
    navigation.goBack();
  };

  const left = useRef(new Animated.Value(100)).current;
  const top = useRef(new Animated.Value(150)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const xAnim = Animated.timing(left, {
      toValue: 16,
      duration: 800,
      useNativeDriver: false,
    });
    const yAnim = Animated.timing(top, {
      toValue: inset.top + 16,
      duration: 900,
      useNativeDriver: false,
    });
    const opacityAnim = Animated.timing(opacity, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: false,
    });

    const posAnims = Animated.sequence([yAnim, xAnim]);
    Animated.parallel([opacityAnim, posAnims]).start();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.root}>
      <Animated.View style={[styles.searchWrapper, {top, left, opacity}]}>
        <Image source={ICONS.search} style={styles.icon} />
        <TextInput
          autoFocus
          placeholder={'search your word.'}
          placeholderTextColor={COLORS.grayscale[400]}
          style={styles.textInput}
          onChangeText={handleSearchKeyword}
        />
        <Pressable onPress={handleNavigate} style={styles.navigationButton}>
          <Image source={ICONS.close} style={styles.icon} />
        </Pressable>
      </Animated.View>

      <SearchResultViewer
        keyword={keyword}
        focusedPageDate={route.params.wordbookKey}
        style={{marginTop: inset.top + 32}}
      />
    </KeyboardAvoidingView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  searchWrapper: {
    position: 'absolute',
    left: 30,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  textInput: {
    ...FONTS.h2,
    color: 'white',
    marginLeft: 10,
    paddingBottom: 5,
    width: '75%',
  },
  navigationButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    tintColor: COLORS.grayscale[400],
  },
});
