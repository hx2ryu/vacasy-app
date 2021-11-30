import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RootParamList} from '../../navigation/types';

type Props = NativeStackScreenProps<RootParamList, 'DictionaryDetail'>;
const DictionaryDetailPage: React.FC<Props> = ({route, navigation}) => {
  const item = route.params;
  const handleNavigateToSearch = () => {
    navigation.navigate('Search');
  };

  return <View></View>;
};

export default DictionaryDetailPage;

const styles = StyleSheet.create({});
