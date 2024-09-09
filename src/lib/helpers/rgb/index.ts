import { MAX_COLOR_CHANNEL_VALUE } from '@/lib/utils/constants';

export const getRgbCodeFromRgbString = (colorChannels: string[]) => {
  const [r, g, b = 0] = colorChannels.map(colorChannel => {
    const value = parseInt(colorChannel);

    if (isNaN(value)) return 0;

    return value > MAX_COLOR_CHANNEL_VALUE ? MAX_COLOR_CHANNEL_VALUE : value;
  });

  return [r, g, b];
};

export const toRgbString = (r: number, g: number, b: number) => {
  return `rgb(${r}, ${g}, ${b})`;
};
