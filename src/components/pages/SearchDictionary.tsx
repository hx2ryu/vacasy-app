import {COLORS, FONTS} from '@/constants/theme';
import {RootParamList} from '@/navigation/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchContainer} from '../molecules';
import {SearchResultViewer} from '../organisms';

type Props = NativeStackScreenProps<RootParamList, 'Search'>;
const SearchDictionary: React.FC<Props> = ({navigation, route}) => {
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
    <View style={styles.root}>
      <SearchContainer
        left={left}
        top={top}
        opacity={opacity}
        onChangeText={handleSearchKeyword}
        onNavigate={handleNavigate}
      />
      <SearchResultViewer
        keyword={keyword}
        focusedPageDate={route.params.wordbookKey}
        style={{marginTop: inset.top + 32}}
      />
    </View>
  );
};

export default SearchDictionary;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  searchWrapper: {
    position: 'absolute',
    left: 16,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
  },
  textInput: {
    ...FONTS.h2,
    color: 'white',
    marginLeft: 10,
    paddingBottom: 5,
    width: '60%',
  },
  navigationButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cancelText: {color: COLORS.grayscale[400]},
  icon: {
    tintColor: COLORS.grayscale[400],
  },
});
