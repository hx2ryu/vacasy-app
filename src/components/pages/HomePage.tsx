import React, {useMemo, useState} from 'react';
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

type Props = NativeStackScreenProps<RootParamList, 'Home'>;
const HomePage: React.FC<Props> = ({navigation}) => {
  const {topSafeAreaStyle, bottomSafeAreaStyle} = useGetSafeAreaStyle();
  const {pos, handleBindScrollPos} = useBindScrollPos();
  const [title, setTitle] = useState<DateStringInfo>(
    getDateString(new Date().toISOString()),
  );

  const wordbooks = useAppSelector(state => wordbookSelector.selectAll(state));
  const isEmpty = useMemo(() => wordbooks.length === 0, [wordbooks]);

  const handleGotoSearchPage = () => {
    navigation.navigate('Search');
  };
  const handleUpdateTitle = () => {
    // setTitle();
  };

  return (
    <View style={[styles.root, topSafeAreaStyle, bottomSafeAreaStyle]}>
      <DateStringText data={title} />

      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScrollEndDrag={handleUpdateTitle}
        onScroll={handleBindScrollPos}>
        {isEmpty && (
          <TouchableTextBox
            content={'Tab to try to search.'}
            onPress={handleGotoSearchPage}
          />
        )}
      </Animated.ScrollView>

      {/* <Animated.ScrollView
        onScrollEndDrag={handleUpdateTitle}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        horizontal
        scrollEnabled
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        {wordbooks.length > 0 ? (
          wordbooks.map((item, index) => {
            const wordList = item.wordList;
            if (wordList) {
              return <Wordbook key={index} wordList={wordList} />;
            }
          })
        ) : (
          <Pressable
            style={styles.emptyWrapper}
            onPress={handleOpenSearchModal}>
            <Text type={'h1'} style={styles.emptyText}>
              {'Tab to try to search.'}
            </Text>
          </Pressable>
        )}
      </Animated.ScrollView> */}

      <ScrollIndicator pos={pos.x} pageCount={5} />

      <View style={[styles.bottomMenu, bottomSafeAreaStyle]}>
        <FloatingButton onPress={handleGotoSearchPage}>
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
    // bottom: 0,
  },
  searchIcon: {
    tintColor: COLORS.white[1000],
  },
});
