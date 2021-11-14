import {DEVICE_SIZE} from '@/constants/theme';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DateText, MainMenuBox} from '../molecules';
import SearchBox from '../organisms/SearchBox';

const HomeTemplate: React.FC = () => {
  const {top, bottom} = useSafeAreaInsets();
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);

  return (
    <View>
      <View style={styles.fixedView}>
        <DateText inputDate={new Date()} />
        <MainMenuBox style={[styles.bottomMenu, {marginBottom: bottom + 32}]} />
      </View>

      <Animated.ScrollView
        horizontal
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        style={[styles.root, {top, bottom}]}>
        {showSearchBox && (
          <SearchBox
            autoFocus
            placeholder={'search a word.'}
            searchResult={[]}
          />
        )}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // justifyContent: 'space-between',
    padding: 16,
  },
  fixedView: {
    zIndex: 1,
    flex: 1,
    position: 'absolute',
    // bottom: 16,
    width: DEVICE_SIZE.width - 32,
    justifyContent: 'space-between',
    backgroundColor: 'green',
  },
  bottomMenu: {
    justifyContent: 'flex-end',
    // backgroundColor: 'blue',
  },
});

export default HomeTemplate;
