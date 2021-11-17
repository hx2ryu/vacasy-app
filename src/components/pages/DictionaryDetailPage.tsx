import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {DictionaryCard} from '../molecules';
import {RootParamList} from '../navigation/types';
import DictionaryDetailTemplate from '../templates/DictionaryDetailTemplate';

type Props = NativeStackScreenProps<RootParamList, 'DictionaryDetail'>;
const DictionaryDetailPage: React.FC<Props> = ({route, navigation}) => {
  const item = route.params;
  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return <DictionaryDetailTemplate onPress={onGoBack} wordCardProps={item} />;
};

export default DictionaryDetailPage;

const styles = StyleSheet.create({});
