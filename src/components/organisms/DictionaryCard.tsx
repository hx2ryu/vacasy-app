import {COLORS, ICONS} from '@/constants/theme';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from '../atoms';

type Props = {
  item: FilteredWordInfo;
  onClose: () => void;
};
const DetailInfoCard: React.FC<Props> = ({item, onClose}) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerWrapper}>
        <Text type={'h1'} style={styles.font}>
          {item.word}
        </Text>
        <Pressable onPress={onClose}>
          <Image source={ICONS.close} style={styles.icon} />
        </Pressable>
      </View>
      <View style={styles.phoneticWrapper}>
        <TouchableOpacity style={{marginRight: 6}}>
          <Image source={ICONS.speaker} />
        </TouchableOpacity>

        <Text type={'blockQuote2'} style={styles.font}>
          {item.phonetic}
        </Text>
      </View>

      <ScrollView>
        {item.meanings.map((meaningItem, index) => (
          <View key={index} style={{flexDirection: 'row', padding: 16}}>
            <Text type={'h6'} style={styles.index}>
              {index + 1}
            </Text>
            <View>
              <Text type={'p'} style={styles.font}>
                {`(${meaningItem.partOfSpeech}) ${meaningItem.definition}`}
              </Text>
              {meaningItem.example && (
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.dot} />
                  <Text type={'blockQuote2'} style={styles.font}>
                    {meaningItem.example}
                  </Text>
                </View>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
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
    backgroundColor: COLORS.grayscale[800],
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 6,
  },
  phoneticWrapper: {flexDirection: 'row', alignItems: 'center', marginLeft: 6},
  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 10,
  },
  font: {
    color: 'white',
  },
  icon: {
    tintColor: 'white',
  },
  index: {color: COLORS.grayscale[500], marginRight: 6},
});
