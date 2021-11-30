import {wordBookSelector} from '@/features/wordbook/slice';
import {useAppSelector} from '@/store/hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DateText, HorizontalScrollIndicator, MainMenuBox} from '../molecules';
import {RootParamList} from '../../navigation/types';
import {Wordbook} from '../organisms';
import {DEVICE_SIZE} from '@/constants/theme';

type Props = NativeStackScreenProps<RootParamList, 'Home'>;
const HomePage: React.FC<Props> = ({navigation}) => {
  const wordbooks = useAppSelector(wordBookSelector.selectAll);
  const {top, bottom} = useSafeAreaInsets();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [focusedPageDate, setFocusedPateDate] = useState<string>('');
  const [pageIndex, setPageIndex] = useState<number>(0);

  const handleOpenSearchModal = () => {
    navigation.navigate('Search', undefined);
  };

  useEffect(() => {
    const intitailDate =
      wordbooks.length > 0
        ? wordbooks[0].date
        : new Date().toLocaleDateString();
    setFocusedPateDate(intitailDate);

    scrollX.addListener(({value}) => {
      const pos = Math.floor(value / DEVICE_SIZE.width);
      if (pos > -1 && wordbooks[pageIndex]) {
        setPageIndex(pos);
        console.log(wordbooks[pageIndex].date);
        setFocusedPateDate(wordbooks[pageIndex].date);
      }
    });

    return () => scrollX.removeAllListeners();
  }, [wordbooks]);

  return (
    <View style={[styles.root, {marginTop: top, marginBottom: bottom}]}>
      {focusedPageDate !== '' && <DateText dateString={focusedPageDate} />}

      <Animated.ScrollView
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
        {wordbooks.map((item, index) => {
          const wordList = item.wordList;
          if (wordList) {
            return <Wordbook key={index} wordList={wordList} />;
          }
        })}
      </Animated.ScrollView>

      <HorizontalScrollIndicator
        scrollX={scrollX}
        pageCount={wordbooks.length}
      />

      <MainMenuBox
        style={styles.bottomMenu}
        onPressSearchButton={handleOpenSearchModal}
      />
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
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
});
