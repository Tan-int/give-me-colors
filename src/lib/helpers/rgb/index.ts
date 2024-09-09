import { MAX_COLOR_CHANNEL_VALUE } from '@/lib/utils/constants';

export const getRgbCode = (match: string[]) => {
  let r = 0,
    g = 0,
    b = 0;

  if (match) {
    [r, g, b] = match.map(hex => {
      const value = parseInt(hex);
      return value > MAX_COLOR_CHANNEL_VALUE ? MAX_COLOR_CHANNEL_VALUE : value;
    });
  }

  return [r, g, b];
};

export const toRgbString = (r: number, g: number, b: number) => {
  return `rgb(${r}, ${g}, ${b})`;
};
