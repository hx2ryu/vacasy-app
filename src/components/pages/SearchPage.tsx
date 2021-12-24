import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {COLORS} from '@/theme';
import {RootParamList} from '@/navigation/types';
import {SearchBox, SearchResult} from '../organisms';
import {useGetSafeAreaStyle, useInput} from '@/hooks';

type Props = NativeStackScreenProps<RootParamList, 'Search'>;
const SearchPage: React.FC<Props> = ({navigation}) => {
  const {topSafeAreaStyle} = useGetSafeAreaStyle();
  const {value, clearButtonVisible, handleChangeText, handleClearText} =
    useInput();

  const handleNavigateToGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.root, topSafeAreaStyle]}>
      <SearchBox
        value={value}
        clearButtonVisible={clearButtonVisible}
        onPressCancel={handleNavigateToGoBack}
        onClearText={handleClearText}
        onChangeText={handleChangeText}
      />
      <SearchResult keyword={value} navigation={navigation} />
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: COLORS.black[800], paddingHorizontal: 16},
});
