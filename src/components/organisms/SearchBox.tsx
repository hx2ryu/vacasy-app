import {COLORS, FONTS} from '@/constants/theme';
import React, {useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  StyleSheet,
  TextInputProps,
  View,
} from 'react-native';
import {TextInput} from '../atoms';
import {SearhResult} from '../molecules';

interface Props extends TextInputProps {
  searchResult: Array<string>;
}
const SearchBox: React.FC<Props> = ({searchResult, ...props}) => {
  const [showResult, setShowResult] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');

  const onChangeSearchText = (text: string) => {
    setSearchText(text);
  };

  return (
    <View style={styles.root}>
      <TextInput
        {...props}
        onChangeText={onChangeSearchText}
        onSubmitEditing={() => {
          setShowResult(true);
        }}
        style={styles.textInput}
      />
      {showResult && (
        <FlatList
          style={{backgroundColor: 'blue'}}
          data={searchResult}
          renderItem={({item, index}) => (
            <SearhResult content={item} key={index} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    ...FONTS.h2,
    color: COLORS.grayscale[500],
  },
});

export default SearchBox;
