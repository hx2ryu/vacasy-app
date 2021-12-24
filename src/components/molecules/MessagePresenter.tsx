import {COLORS} from '@/theme';
import React from 'react';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import {Text} from '../atoms';

type Props = {
  title?: string;
  description: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};
const MessagePresenter: React.FC<Props> = ({
  title,
  description,
  style,
  textStyle,
}) => (
  <View style={[styles.emptySearchWrapper, style]}>
    {title && (
      <Text type={'h1'} style={styles.titleText}>
        {title}
      </Text>
    )}
    <Text type={'p'} style={[styles.emptySearchText, textStyle]}>
      {description}
    </Text>
  </View>
);

export default MessagePresenter;

const styles = StyleSheet.create({
  emptySearchWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {color: COLORS.white[1000], marginBottom: 10},
  emptySearchText: {
    color: COLORS.grayscale[300],
    textAlign: 'center',
    marginTop: 10,
  },
});
