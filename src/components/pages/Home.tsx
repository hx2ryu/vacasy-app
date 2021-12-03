import {wordBookSelector} from '@/features/wordbook/slice';
import {useAppSelector} from '@/store/hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DateText, HorizontalScrollIndicator, MainMenuBox} from '../molecules';
import {RootParamList} from '../../navigation/types';
import {Wordbook} from '../organisms';
import {COLORS, DEVICE_SIZE} from '@/constants/theme';
import {Text} from '../atoms';

type Props = NativeStackScreenProps<RootParamList, 'Home'>;
const Home: React.FC<Props> = ({navigation}) => {
  const wordbooks = useAppSelector(wordBookSelector.selectAll);
  const {top, bottom} = useSafeAreaInsets();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [focusedPageDate, setFocusedPateDate] = useState<string>('');

  const handleOpenSearchModal = () => {
    navigation.navigate('Search', {
      wordbookKey: focusedPageDate,
    });
  };

  const handleUpdateTitle = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (e.nativeEvent.targetContentOffset?.x !== undefined) {
      const pos = Math.ceil(
        e.nativeEvent.targetContentOffset.x / DEVICE_SIZE.width,
      );

      if (wordbooks.length > pos) {
        setFocusedPateDate(wordbooks[pos].date);
      }
    }
  };

  useEffect(() => {
    const intitailDate =
      wordbooks.length > 0
        ? wordbooks[0].date
        : new Date().toLocaleDateString();
    setFocusedPateDate(intitailDate);
  }, []);

  return (
    <View style={[styles.root, {marginTop: top, marginBottom: bottom}]}>
      {focusedPageDate !== '' && (
        <View>
          <DateText dateString={focusedPageDate} />
        </View>
      )}
      <Animated.ScrollView
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
            console.log(item);
            const wordList = item.wordList;
            if (wordList) {
              return <Wordbook key={index} wordList={wordList} />;
            }
          })
        ) : (
          <View style={styles.emptyWrapper}>
            <Text type={'h1'} style={styles.emptyText}>
              {'Try to\nsearch a word.'}
            </Text>
          </View>
        )}
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

export default Home;

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
  emptyWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: DEVICE_SIZE.width - 32,
    backgroundColor: COLORS.grayscale[100],
    borderRadius: 20,
  },
  emptyText: {textAlign: 'center', color: COLORS.grayscale[300]},
});
