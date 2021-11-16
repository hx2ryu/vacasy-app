import {COLORS} from '@/constants/theme';

export function getDotColor(index: number) {
  return COLORS.dotColors[index % 5];
}
