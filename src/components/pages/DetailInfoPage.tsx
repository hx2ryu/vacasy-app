import React from 'react';
import {RootParamList} from '@/navigation/types';
import {COLORS, DEVICE_SIZE} from '@/theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {Pressable, StyleSheet, View} from 'react-native';
import {DetailInfoCard} from '../organisms';

type Props = NativeStackScreenProps<RootParamList, 'DetailInfo'>;
const DetailInfoPage: React.FC<Props> = ({route, navigation}) => {
  const {data} = route.params;
  const handleNavigate = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
      <Pressable style={styles.wrapper} onPress={handleNavigate} />
      <DetailInfoCard data={data} onClose={handleNavigate} />
    </View>
  );
};

export default DetailInfoPage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black[300],
  },
  wrapper: {
    flex: 1,
    width: DEVICE_SIZE.width,
  },
});
