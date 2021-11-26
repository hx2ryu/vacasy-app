import {COLORS, FONTS} from '@/constants/theme';
import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {SearchResultViewer} from '../organisms';

const SearchPage: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('');
  const handleSearchKeyword = (text: string) => {
    setKeyword(text);
  };

  return (
    <View style={styles.root}>
      <View style={styles.searchWrapper}>
        <TextInput
          autoFocus
          placeholder={'search your word.'}
          placeholderTextColor={COLORS.grayscale[400]}
          style={styles.textInput}
          onChangeText={handleSearchKeyword}
        />
      </View>
      <SearchResultViewer keyword={keyword} />
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.grayscale[600],
    justifyContent: 'center',
  },
  searchWrapper: {
    alignItems: 'center',
  },
  textInput: {
    ...FONTS.h2,
    color: 'white',
    marginLeft: 10,
    paddingBottom: 5,
    // borderBottomColor: 'white',
    // borderBottomWidth: 1,
  },
});
