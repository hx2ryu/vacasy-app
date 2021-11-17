import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WordCard} from '../molecules';
import {WordCardProps} from '../molecules/WordCard';

type Props = {
  wordCardProps: WordCardProps;
};
const DictionaryCard: React.FC<Props> = ({wordCardProps}) => {
  return (
    <View style={{backgroundColor: 'yellow', width: 500, height: 1000}}>
      <View></View>
    </View>
  );
};

export default DictionaryCard;

const styles = StyleSheet.create({});
