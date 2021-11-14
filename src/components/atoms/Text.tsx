import {FONTS, FontType} from '@/constants/theme';
import React from 'react';
import {Text as TextBase, TextProps} from 'react-native';

interface Props extends TextProps {
  type: FontType;
}
const Text: React.FC<Props> = ({children, type}) => (
  <TextBase style={FONTS[type]}>{children}</TextBase>
);

export default Text;
