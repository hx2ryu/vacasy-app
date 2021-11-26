import {wordBookSelector} from '@/features/wordbook/slice';
import {useAppSelector} from '@/store/hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DateText, HorizontalScrollIndicator, MainMenuBox} from '../molecules';
import {RootParamList} from '../navigation/types';
import {Wordbook} from '../organisms';

type Props = NativeStackScreenProps<RootParamList, 'Home'>;
const HomePage: React.FC<Props> = ({navigation}) => {
  const state = useAppSelector(state => state);
  const wordbooks = wordBookSelector.selectAll(state);

  const {top, bottom} = useSafeAreaInsets();
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOpenSearchModal = () => {
    console.log('modal');
    navigation.navigate('Search', undefined);
  };

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
        {wordbooks.map((item, index) => (
          <Wordbook key={index} wordList={item.wordList} />
        ))}
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
  scrollView: {paddingVertical: 16},
  bottomMenu: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
});
