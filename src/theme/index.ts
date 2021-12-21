import {TextStyle, Dimensions} from 'react-native';

const DEVICE_SIZE = Dimensions.get('window');

const ICONS = {
  cancel: require('@assets/icons/ic_20_cancel.png'),
  search: require('@assets/icons/ic_20_search.png'),
  star: require('@assets/icons/ic_20_star.png'),
  sound: require('@assets/icons/ic_20_sound.png'),
  arrowLeft: require('@assets/icons/ic_24_arrow_left.png'),
  close: require('@assets/icons/ic_24_close.png'),
  info: require('@assets/icons/ic_24_info.png'),
  list: require('@assets/icons/ic_24_list.png'),
  plus: require('@assets/icons/ic_24_plus.png'),
};

const COLORS = {
  primary: '#f8f9fa',
  // primary: '#fff9db',
  grayscale: {
    100: '#f1f3f5',
    200: '#e9ecef',
    300: '#dee2e6',
    400: '#ced4da',
    500: '#adb5bd',
    600: '#868e96',
    700: '#495057',
    800: '#343a40',
    900: '#212529',
  },
  white: {
    50: 'rgba(255, 255, 255, 0.05)',
    100: 'rgba(255, 255, 255, 0.1)',
    200: 'rgba(255, 255, 255, 0.2)',
    300: 'rgba(255, 255, 255, 0.3)',
    400: 'rgba(255, 255, 255, 0.4)',
    500: 'rgba(255, 255, 255, 0.5)',
    600: 'rgba(255, 255, 255, 0.6)',
    700: 'rgba(255, 255, 255, 0.7)',
    800: 'rgba(255, 255, 255, 0.8)',
    900: 'rgba(255, 255, 255, 0.9)',
    1000: 'rgba(255, 255, 255, 1)',
  },
  black: {
    50: 'rgba(0, 0, 0, 0.05)',
    100: 'rgba(0, 0, 0, 0.1)',
    200: 'rgba(0, 0, 0, 0.2)',
    300: 'rgba(0, 0, 0, 0.3)',
    400: 'rgba(0, 0, 0, 0.4)',
    500: 'rgba(0, 0, 0, 0.5)',
    600: 'rgba(0, 0, 0, 0.6)',
    700: 'rgba(0, 0, 0, 0.7)',
    800: 'rgba(0, 0, 0, 0.8)',
    900: 'rgba(0, 0, 0, 0.9)',
    1000: 'rgba(0, 0, 0, 1)',
  },
  blue: '#339af0',
  green: '#37b24d',
  red: '#fa5252',
  purple: '#be4bdb',
  yellow: '#fcc419',
  dotColors: ['#ff6b6b', '#fcc419', '#51cf66', '#ff922b', '#5c7cfa'],
};

type FontType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'blockQuote1'
  | 'blockQuote2'
  | 'blockQuote3';

const FONTS: Record<FontType, TextStyle> = {
  h1: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    lineHeight: 36,
    color: '#000000',
    fontWeight: 'bold',
  },
  h2: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    lineHeight: 30,
    color: COLORS.grayscale[700],
    fontWeight: 'bold',
  },
  h3: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    lineHeight: 30,
    color: COLORS.grayscale[700],
    fontWeight: 'normal',
  },
  h4: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    lineHeight: 26,
    color: COLORS.grayscale[700],
    fontWeight: 'bold',
  },
  h5: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    lineHeight: 26,
    color: COLORS.grayscale[700],
    fontWeight: 'normal',
  },
  h6: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.grayscale[700],
    fontWeight: 'bold',
  },
  p: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.grayscale[700],
    fontWeight: 'normal',
  },
  blockQuote1: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.grayscale[700],
    fontWeight: 'bold',
  },
  blockQuote2: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.grayscale[700],
    fontWeight: 'normal',
  },
  blockQuote3: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.grayscale[700],
    fontWeight: 'bold',
  },
};

export {ICONS, COLORS, FONTS, DEVICE_SIZE};
export type {FontType};
