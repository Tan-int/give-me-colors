import { MAX_COLOR_CHANNEL_VALUE } from '@/lib/utils/constants';

export const getRgbCode = (match: string[]) => {
  let r = 0,
    g = 0,
    b = 0;

  if (match) {
    [r, g, b] = match.map(hex => parseInt(hex));
  }

  if (r > MAX_COLOR_CHANNEL_VALUE) r = MAX_COLOR_CHANNEL_VALUE;

  if (g > MAX_COLOR_CHANNEL_VALUE) g = MAX_COLOR_CHANNEL_VALUE;

  if (b > MAX_COLOR_CHANNEL_VALUE) b = MAX_COLOR_CHANNEL_VALUE;
  return [r, g, b];
};

export const toRgbString = (r: number, g: number, b: number) => {
  return `rgb(${r}, ${g}, ${b})`;
};
