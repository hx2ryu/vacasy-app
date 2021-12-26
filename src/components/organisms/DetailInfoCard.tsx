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
        {data.phonetics.map((phoneticItem, pIndex) => (
          <View
            style={[styles.rowDirection, styles.phoneticWrapper]}
            key={pIndex}>
            {phoneticItem.audio && (
              <TouchableOpacity style={styles.soundButton}>
                <Image source={ICONS.sound} />
              </TouchableOpacity>
            )}

            <Text type={'blockQuote2'} style={styles.font}>
              {`${phoneticItem.text}`}
            </Text>
          </View>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {data.meanings.map((meaningItem, mIndex) => (
          <View style={styles.meaningWrapper} key={mIndex}>
            <View style={[styles.rowDirection]}>
              <Text type={'p'} style={styles.partOfSpeech}>
                {`(${meaningItem.partOfSpeech})`}
              </Text>
            </View>

            {meaningItem.definitions.map((definitionItem, dIndex) => (
              <View style={styles.definitionWrapper} key={dIndex}>
                <Text type={'blockQuote1'} style={styles.font}>
                  {`${definitionItem.definition}`}
                </Text>
                {definitionItem?.example && (
                  <View style={styles.rowDirection}>
                    <View
                      style={[
                        styles.dot,
                        {backgroundColor: getDotColor(dIndex)},
                      ]}
                    />

                    <Text type={'blockQuote2'} style={styles.font}>
                      {definitionItem?.example}
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
  phoneticWrapper: {marginRight: 10},
  definitionWrapper: {marginBottom: 10},
});
