import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DateStringInfo} from '@/utils/date';
import {Text} from '../atoms';

type Props = {
  data: DateStringInfo;
};
const DateStringText: React.FC<Props> = ({data}) => {
  return (
    <View>
      <View style={styles.root}>
        <Text type={'h1'} style={styles.date}>
          {data.date}
        </Text>
        <Text type={'h3'} style={styles.monthAndYear}>
          {` ${data.month}, ${data.year}`}
        </Text>
      </View>
    </View>
  );
};

export default DateStringText;

const styles = StyleSheet.create({
  root: {flexDirection: 'row', alignItems: 'flex-end'},
  date: {fontSize: 48, lineHeight: 60},
  monthAndYear: {marginBottom: 8},
});
