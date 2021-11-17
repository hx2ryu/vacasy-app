import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DictionaryCard} from '../molecules';
import {WordCardProps} from '../molecules/WordCard';

type Props = {
  wordCardProps: WordCardProps;
  onPress: () => void;
};
const DictionaryDetailTemplate: React.FC<Props> = ({
  wordCardProps,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Carousel
        data={detailInfoList}
        renderItem={({item, index}) => (
          <DictionaryCard wordCardProps={item} key={index} />
        )}
      /> */}
      <DictionaryCard wordCardProps={wordCardProps} />
    </TouchableOpacity>
  );
};

export default DictionaryDetailTemplate;

const styles = StyleSheet.create({});
