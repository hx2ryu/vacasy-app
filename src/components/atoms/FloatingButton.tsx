import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

const FloatingButton: React.FC<TouchableOpacityProps> = ({
  children,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.root, style]}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default FloatingButton;
const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    right: 16,
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 30,
  },
});
