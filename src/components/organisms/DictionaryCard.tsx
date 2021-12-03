import {ICONS} from '@/constants/theme';
import React, {useEffect} from 'react';
import {Image, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {Text} from '../atoms';

type Props = {
  item: FilteredWordInfo;
};
const DetailInfoCard: React.FC<Props> = ({item}) => {
  return (
    <ScrollView style={styles.card}>
      {/* {word.} */}
      <View>
        <Text type={'h4'}>{item.word}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Pressable>
          <Image source={ICONS.info} />
        </Pressable>

        <Text type={'blockQuote2'}>US</Text>
        <Text type={'blockQuote2'}>{item.phonetic}</Text>
      </View>
      {item.meanings.map(meaningItem => (
        <View>
          <Text type={'p'}>{meaningItem.definition}</Text>
          <Text type={'blockQuote2'}>{meaningItem.example}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default DetailInfoCard;

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    left: 16,
    right: 16,
    height: 300,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
