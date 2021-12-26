import React, {useCallback, useMemo, useRef, useState} from 'react';
import {COLORS, DEVICE_SIZE, ICONS} from '@/theme';
import {useBindScrollPos, useGetSafeAreaStyle} from '@/hooks';
import {RootParamList} from '@/navigation/types';
import {DateStringInfo, getDateString} from '@/utils/date';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Animated,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {FloatingButton} from '../atoms';
import {DateStringText, ScrollIndicator, TouchableTextBox} from '../molecules';
import {useAppSelector} from '@/store/hooks';
import {wordbookSelector} from '@/features/wordbook';
import {Wordbook} from '../organisms';

type Props = NativeStackScreenProps<RootParamList, 'Home'>;
const HomePage: React.FC<Props> = ({navigation}) => {
  const {topSafeAreaStyle, bottomSafeAreaStyle} = useGetSafeAreaStyle();
  const {pos, handleBindScrollPos} = useBindScrollPos();
  const ref = useRef<ScrollView>(null);

  const wordbooks = useAppSelector(state => wordbookSelector.selectAll(state));
  const {isEmpty, initialTitle} = useMemo(
    () => ({
      isEmpty: wordbooks.length === 0,
      initialTitle: new Date().toDateString(),
    }),
    [wordbooks],
  );
  const [title, setTitle] = useState<DateStringInfo>(
    getDateString(initialTitle),
  );

  const handleShowSearchPage = () => {
    navigation.navigate('Search');
  };
  const handleUpdateTitle = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const x = e.nativeEvent.targetContentOffset?.x;
      if (x !== undefined) {
        const index = Math.ceil(x / DEVICE_SIZE.width);
        const date = wordbooks[index].date;
        const dateStringInfo = getDateString(date);
        setTitle(dateStringInfo);
      }
    },
    [wordbooks],
  );
  const handleFocusOnLastPage = () => {
    ref.current?.scrollToEnd();
    if (isEmpty === false) {
      const focusedPageDate = getDateString(
        wordbooks[wordbooks.length - 1].date,
      );
      setTitle(focusedPageDate);
    }
  };

  return (
    <View style={[styles.root, topSafeAreaStyle, bottomSafeAreaStyle]}>
      <DateStringText data={title} />
      <Animated.ScrollView
        ref={ref}
        horizontal
        bounces={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScrollEndDrag={handleUpdateTitle}
        onLayout={handleFocusOnLastPage}
        onScroll={handleBindScrollPos}>
        {isEmpty ? (
          <TouchableTextBox
            content={'Tab to try to search.'}
            onPress={handleShowSearchPage}
          />
        ) : (
          wordbooks.map((item, index) => (
            <Wordbook
              data={item.wordbook}
              navigation={navigation}
              key={index}
            />
          ))
        )}
      </Animated.ScrollView>
      <ScrollIndicator pos={pos} pageCount={wordbooks.length} />

      <View style={[styles.bottomMenu, bottomSafeAreaStyle]}>
        <FloatingButton onPress={handleShowSearchPage}>
          <Image source={ICONS.search} style={styles.searchIcon} />
        </FloatingButton>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  bottomMenu: {
    marginBottom: 16,
  },
  searchIcon: {
    tintColor: COLORS.white[1000],
  },
});
