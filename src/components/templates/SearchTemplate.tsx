import {COLORS} from '@/constants/theme';
import {Word} from '@/features/wordbook/slice';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchBox} from '../organisms';

type Props = {
  onSearchWord: (keyword: string) => void;
  wordList: Array<Word>;
};
const SearchTemplate: React.FC<Props> = ({onSearchWord, wordList}) => {
  return (
    <View style={styles.root}>
      <SearchBox
        containerStyle={styles.searchBox}
        autoFocus
        placeholder={'search your word.'}
        searchResult={wordList}
        onSearchWord={onSearchWord}
      />
    </View>
  );
};

export default SearchTemplate;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.grayscale[600],
    justifyContent: 'center',
  },
  searchBox: {
    // backgroundColor: 'yellow',
  },
});
