import {TextStyle, Dimensions} from 'react-native';

const DEVICE_SIZE = Dimensions.get('window');

const ICONS = {
  plue: require('@assets/icons/ic_24_plus.png'),
  list: require('@assets/icons/ic_24_list.png'),
  close: require('@assets/icons/ic_24_close.png'),
  search: require('@assets/icons/ic_24_search.png'),
  star: require('@assets/icons/ic_24_star.png'),
  leftArrow: require('@assets/icons/ic_24_arrow_left.png'),
};

const COLORS = {
  white: '#f8f9fa',
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
  dotColors: ['#ff6b6b', '#ff922b', '#fcc419', '#51cf66', '#5c7cfa'],
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
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    lineHeight: 36,
    color: '#000000',
    fontWeight: 'bold',
  },
  h2: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    lineHeight: 30,
    color: COLORS.grayscale[700],
    fontWeight: 'bold',
  },
  h3: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    lineHeight: 30,
    color: COLORS.grayscale[700],
    fontWeight: 'normal',
  },
  h4: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    lineHeight: 26,
    color: COLORS.grayscale[700],
    fontWeight: 'bold',
  },
  h5: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    lineHeight: 26,
    color: COLORS.grayscale[700],
    fontWeight: 'normal',
  },
  h6: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.grayscale[700],
    fontWeight: 'bold',
  },
  p: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.grayscale[700],
    fontWeight: 'normal',
  },
  blockQuote1: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.grayscale[700],
    fontWeight: 'bold',
  },
  blockQuote2: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.grayscale[700],
    fontWeight: 'normal',
  },
  blockQuote3: {
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.grayscale[700],
    fontWeight: 'bold',
  },
};

export {ICONS, COLORS, FONTS, DEVICE_SIZE};
export type {FontType};
