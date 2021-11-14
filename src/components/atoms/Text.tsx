import {FONTS, FontType} from '@/constants/theme';
import React from 'react';
import {Text as TextBase, TextProps} from 'react-native';

interface Props extends TextProps {
  type: FontType;
}
const Text: React.FC<Props> = ({children, style, type}) => (
  <TextBase style={[FONTS[type], style]}>{children}</TextBase>
);

export default Text;
