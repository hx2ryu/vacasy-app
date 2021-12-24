import React, {useCallback, useMemo, useState} from 'react';
import {COLORS, ICONS} from '@/theme';
import {useBindScrollPos, useGetSafeAreaStyle} from '@/hooks';
import {RootParamList} from '@/navigation/types';
import {DateStringInfo, getDateString} from '@/utils/date';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Animated, Image, StyleSheet, View} from 'react-native';
import {FloatingButton} from '../atoms';
import {DateStringText, ScrollIndicator, TouchableTextBox} from '../molecules';
import {useAppSelector} from '@/store/hooks';
import {wordbookSelector} from '@/features/wordbook';
import {Wordbook} from '../organisms';

type Props = NativeStackScreenProps<RootParamList, 'Home'>;
const HomePage: React.FC<Props> = ({navigation}) => {
  const {topSafeAreaStyle, bottomSafeAreaStyle} = useGetSafeAreaStyle();
  const {pos, pageIndex, handleBindScrollPos} = useBindScrollPos();
  const [title, setTitle] = useState<DateStringInfo>(
    getDateString(new Date().toISOString()),
  );

  const wordbooks = useAppSelector(state => wordbookSelector.selectAll(state));
  const isEmpty = useMemo(() => wordbooks.length === 0, [wordbooks]);

  const handleShowSearchPage = () => {
    navigation.navigate('Search');
  };
  const handleUpdateTitle = useCallback(() => {
    const date = wordbooks[pageIndex].date;
    const dateStringInfo = getDateString(date);
    setTitle(dateStringInfo);
  }, [wordbooks, pageIndex]);

  return (
    <View style={[styles.root, topSafeAreaStyle, bottomSafeAreaStyle]}>
      <DateStringText data={title} />
      <Animated.ScrollView
        horizontal
        bounces={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScrollEndDrag={handleUpdateTitle}
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
