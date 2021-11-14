import React from 'react';
import {TextInput as TextInputBase, TextInputProps} from 'react-native';

const TextInput: React.FC<TextInputProps> = ({style, ...props}) => (
  <TextInputBase {...props} style={[{}, style]} />
);

export default TextInput;
