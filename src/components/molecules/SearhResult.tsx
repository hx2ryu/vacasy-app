import React, {useCallback, useRef} from 'react';
import {TouchableOpacityProps, Animated, View, StyleSheet} from 'react-native';
import {Button, Text} from '../atoms';

interface Props extends TouchableOpacityProps {
  content: string;
}
const SearhResult: React.FC<Props> = ({content, ...props}) => {
  const moreInfo = useRef(new Animated.Value(0)).current;

  const onPress = useCallback(() => {
    Animated.timing(moreInfo, {
      toValue: 30,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.root}>
      <Button {...props} onPress={onPress}>
        <Text type={'h1'}>{content}</Text>
        <Animated.View
          style={{height: 10, backgroundColor: 'blue'}}></Animated.View>
      </Button>
    </View>
  );
};

export default SearhResult;

const styles = StyleSheet.create({
  root: {backgroundColor: 'green'},
});
