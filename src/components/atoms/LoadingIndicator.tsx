import {DEVICE_SIZE} from '@/theme';
import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

const LoadingIndicator: React.FC = () => {
  return <ActivityIndicator style={styles.root} />;
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    width: DEVICE_SIZE.width,
    height: DEVICE_SIZE.height - 100,
  },
});
