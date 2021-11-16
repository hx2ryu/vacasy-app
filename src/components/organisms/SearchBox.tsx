import {COLORS, FONTS, ICONS} from '@/constants/theme';
import {Word} from '@/features/wordbook/slice';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {Wordbook} from '.';
import {TextInput} from '../atoms';
import {SearhResult, WordCard} from '../molecules';
import SearchResultViewer from './SearchResultViewer';

interface Props extends TextInputProps {
  searchResult: Array<Word>;
  containerStyle?: ViewStyle;
  onSearchWord: (keyword: string) => void;
}
const SearchBox: React.FC<Props> = ({
  searchResult,
  containerStyle,
  onSearchWord,
  ...props
}) => {
  const [showResult, setShowResult] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');

  const onChangeSearchText = (text: string) => {
    setSearchText(text);
  };

  return (
    <View style={[styles.root, containerStyle]}>
      <View style={styles.textInputWrapper}>
        <Image source={ICONS.search} style={styles.searchIcon} />
        <TextInput
          {...props}
          placeholderTextColor={COLORS.grayscale[400]}
          onChangeText={onChangeSearchText}
          onSubmitEditing={() => {
            setShowResult(true);
            onSearchWord(searchText);
          }}
          style={styles.textInput}
        />
      </View>
      {showResult && <SearchResultViewer searchKeyword={searchText} />}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    tintColor: 'white',
  },
  textInput: {
    ...FONTS.h2,
    color: 'white',
    marginLeft: 10,
  },
});

export default SearchBox;
