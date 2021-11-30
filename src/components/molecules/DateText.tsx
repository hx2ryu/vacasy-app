import {getDateString} from '@/utils/date';
import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../atoms';

type Props = {
  dateString: string;
};
const DateText: React.FC<Props> = ({dateString}) => {
  const date = useMemo(() => {
    return getDateString(dateString);
  }, [dateString]);

  return (
    <View>
      {date && (
        <View style={styles.root}>
          <Text type={'h1'} style={styles.date}>
            {date.date}
          </Text>
          <Text type={'h3'} style={styles.monthAndYear}>
            {` ${date.month}, ${date.year}`}
          </Text>
        </View>
      )}
    </View>
  );
};

export default DateText;

const styles = StyleSheet.create({
  root: {flexDirection: 'row', alignItems: 'flex-end'},
  date: {fontSize: 48, lineHeight: 60},
  monthAndYear: {marginBottom: 8},
});
