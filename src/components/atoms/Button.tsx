import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

const Button: React.FC<TouchableOpacityProps> = ({children, ...props}) => {
  return <TouchableOpacity {...props}>{children}</TouchableOpacity>;
};

export default Button;
