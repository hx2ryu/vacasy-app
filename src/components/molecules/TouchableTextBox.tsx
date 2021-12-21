import React from 'react';
import {Pressable, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {COLORS, DEVICE_SIZE} from '@/theme';
import {Text} from '../atoms';

type Props = {
  content: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};
const TouchableTextBox: React.FC<Props> = ({content, style, onPress}) => {
  return (
    <Pressable style={[styles.wrapper, style]} onPress={onPress}>
      <Text type={'h2'} style={styles.text}>
        {content}
      </Text>
    </Pressable>
  );
};

export default TouchableTextBox;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: DEVICE_SIZE.width - 32,
    backgroundColor: COLORS.grayscale[100],
    borderRadius: 20,
  },
  text: {textAlign: 'center', color: COLORS.grayscale[300]},
});
