import {DEVICE_SIZE} from '@/constants/theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {RootParamList} from '../../navigation/types';
import {DetailInfoCard} from '../organisms';

type Props = NativeStackScreenProps<RootParamList, 'DetailInfo'>;
const DetailInfoModal: React.FC<Props> = ({route, navigation}) => {
  const {word} = route.params;
  const handleNavigate = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
      <Pressable style={styles.wrapper} onPress={handleNavigate} />
      <DetailInfoCard item={word} onClose={handleNavigate} />
    </View>
  );
};

export default DetailInfoModal;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  wrapper: {
    flex: 1,
    width: DEVICE_SIZE.width,
  },
});
