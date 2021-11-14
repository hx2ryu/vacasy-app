import {COLORS} from '@/constants/theme';
import {getDateString} from '@/utils/date';
import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../atoms';

type Props = {
  inputDate: Date;
};
const DateText: React.FC<Props> = ({inputDate}) => {
  const date = useMemo(() => {
    return getDateString(inputDate);
  }, [inputDate]);

  return (
    <View style={styles.root}>
      <Text type={'h1'} style={styles.text}>
        {date.date}
      </Text>
      <Text
        type={'p'}
        style={styles.text}>{` ${date.month}, ${date.year}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flexDirection: 'row', alignItems: 'center'},
  text: {
    color: COLORS.grayscale[700],
  },
});

export default DateText;
