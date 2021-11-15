import {COLORS, DEVICE_SIZE} from '@/constants/theme';
import {Word} from '@/features/wordbook/slice';
import React, {useRef} from 'react';
import {FlatList, Animated, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  DateText,
  HorizontalScrollIndicator,
  MainMenuBox,
  WordCard,
} from '../molecules';
import {Wordbook} from '../organisms';

type Props = {
  list: Array<Word>;
  onAddWord: (word: Word) => void;
  onPressSearchButton: () => void;
};
const HomeTemplate: React.FC<Props> = ({
  list,
  onPressSearchButton,
  onAddWord,
}) => {
  const {top, bottom} = useSafeAreaInsets();
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={[styles.root, {marginTop: top, marginBottom: bottom}]}>
      <DateText inputDate={new Date()} />

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
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        <Wordbook wordList={list} />

        <View
          style={{
            padding: 16,
            width: DEVICE_SIZE.width - 32,
            backgroundColor: 'green',
          }}
        />
        <View
          style={{
            padding: 16,
            width: DEVICE_SIZE.width - 32,
            backgroundColor: 'yellow',
          }}
        />
        <View
          style={{
            padding: 16,
            width: DEVICE_SIZE.width - 32,
            backgroundColor: 'orange',
          }}
        />
        <View
          style={{
            padding: 16,
            width: DEVICE_SIZE.width - 32,
            backgroundColor: 'yellow',
          }}
        />
      </Animated.ScrollView>

      <HorizontalScrollIndicator scrollX={scrollX} pageCount={4} />

      <MainMenuBox
        style={styles.bottomMenu}
        onPressSearchButton={onPressSearchButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  scrollView: {paddingVertical: 16},
  bottomMenu: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
});

export default HomeTemplate;
