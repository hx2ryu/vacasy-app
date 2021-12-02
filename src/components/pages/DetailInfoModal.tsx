import {DEVICE_SIZE} from '@/constants/theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import {RootParamList} from '../../navigation/types';
import {Text} from '../atoms';

type Props = NativeStackScreenProps<RootParamList, 'DetailInfo'>;
const DetailInfoModal: React.FC<Props> = ({route, navigation}) => {
  const {word} = route.params;
  const handleNavigate = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
      <Pressable style={styles.wrapper} onPress={handleNavigate} />
      <View style={styles.card}>
        {/* {word.} */}
        <Text type={'h1'}>Title</Text>
        <Text type={'h1'}>Title</Text>
        <Text type={'h1'}>Title</Text>
        <Text type={'h1'}>Title</Text>
        <Text type={'h1'}>Title</Text>
        <Text type={'h1'}>Title</Text>
      </View>
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
  card: {
    position: 'absolute',
    left: 16,
    right: 16,
    height: 300,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 10,
    backgroundColor: 'orange',
  },
});
