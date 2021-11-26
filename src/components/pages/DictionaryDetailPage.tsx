import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {RootParamList} from '../navigation/types';
import DictionaryDetailTemplate from '../templates/DictionaryDetailTemplate';

type Props = NativeStackScreenProps<RootParamList, 'DictionaryDetail'>;
const DictionaryDetailPage: React.FC<Props> = ({route, navigation}) => {
  const item = route.params;
  const handleNavigateToSearch = () => {
    navigation.navigate('Search');
  };

  return (
    <DictionaryDetailTemplate
      onPress={handleNavigateToSearch}
      wordCardProps={item}
    />
  );
};

export default DictionaryDetailPage;

const styles = StyleSheet.create({});
