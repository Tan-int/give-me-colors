import { MAX_COLOR_CHANNEL_VALUE } from '@/lib/utils/constants';

export const getRgbCode = (match: string[]) => {
  const [r, g, b = 0] = match.map(hex => {
    const value = parseInt(hex);

    if (isNaN(value)) return 0;

    return value > MAX_COLOR_CHANNEL_VALUE ? MAX_COLOR_CHANNEL_VALUE : value;
  });

  return [r, g, b];
};

export const toRgbString = (r: number, g: number, b: number) => {
  return `rgb(${r}, ${g}, ${b})`;
};
