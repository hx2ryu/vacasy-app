import {COLORS} from '@/theme';

export function getDotColor(index: number) {
  return COLORS.dotColors[index % 5];
}
