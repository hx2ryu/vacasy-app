import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {WordInfo} from '@/api/types';
import {COLORS, ICONS} from '@/theme';
import {Text} from '../atoms';
import {getDotColor} from '@/utils/theme';

type Props = {
  data: WordInfo;
  onClose: () => void;
};
const DetailInfoCard: React.FC<Props> = ({data, onClose}) => {
  return (
    <View style={styles.root}>
      <View style={[styles.rowDirection, styles.headerWrapper]}>
        <Text type={'h1'} style={styles.font}>
          {data.word}
        </Text>
        <Pressable onPress={onClose}>
          <Image source={ICONS.close} style={styles.icon} />
        </Pressable>
      </View>

      <View style={styles.rowDirection}>
        {data.phonetics.map(_ => (
          <View style={[styles.rowDirection, {marginRight: 10}]}>
            {_.audio && (
              <TouchableOpacity style={styles.soundButton}>
                <Image source={ICONS.sound} />
              </TouchableOpacity>
            )}

            <Text type={'blockQuote2'} style={styles.font}>
              {`${_.text}`}
            </Text>
          </View>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {data.meanings.map((meaningItem, index) => (
          <View style={styles.meaningWrapper}>
            <View style={[styles.rowDirection]}>
              <Text type={'p'} style={styles.partOfSpeech}>
                {`(${meaningItem.partOfSpeech})`}
              </Text>
            </View>

            {meaningItem.definitions.map((_, index) => (
              <View style={{marginBottom: 10}}>
                <Text type={'blockQuote1'} style={styles.font}>
                  {`${_.definition}`}
                </Text>
                {_?.example && (
                  <View style={styles.rowDirection}>
                    <View
                      style={[
                        styles.dot,
                        {backgroundColor: getDotColor(index)},
                      ]}
                    />

                    <Text type={'blockQuote2'} style={styles.font}>
                      {_?.example}
                    </Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DetailInfoCard;

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 16,
    right: 16,
    height: 300,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 10,
    backgroundColor: COLORS.grayscale[800],
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerWrapper: {
    justifyContent: 'space-between',
  },
  soundButton: {
    marginRight: 6,
  },
  meaningWrapper: {
    marginBottom: 10,
  },
  scrollContainer: {paddingHorizontal: 10, paddingTop: 16},
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
  partOfSpeech: {color: COLORS.grayscale[500], marginRight: 6},
});
