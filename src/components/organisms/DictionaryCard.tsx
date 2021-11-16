import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Wordbook} from '.';
import {WordCard} from '../molecules';
import {WordCardProps} from '../molecules/WordCard';

type Props = {
  wordCardProps: WordCardProps;
};
const DictionaryCard: React.FC<Props> = ({wordCardProps}) => {
  return (
    <View>
      <WordCard {...wordCardProps} />
    </View>
  );
};

export default DictionaryCard;

const styles = StyleSheet.create({});
