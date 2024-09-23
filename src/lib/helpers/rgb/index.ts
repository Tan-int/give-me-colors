import { MAX_RGB_VALUE, MINIMUM_RGB_VALUE } from '@/lib/utils/constants';
import { rgbToHsl } from '@/lib/helpers/hsl';

export const getRgbCodeFromRgbString = (colorChannels: string[]) => {
  const [r, g, b = 0] = colorChannels.map(colorChannel => {
    const parsedColorChannel = parseInt(colorChannel);

    if (isNaN(parsedColorChannel)) return 0;

    if (parsedColorChannel > MAX_RGB_VALUE) return MAX_RGB_VALUE;
    if (parsedColorChannel < MINIMUM_RGB_VALUE) return MINIMUM_RGB_VALUE;

    return parsedColorChannel;
  });

  const [h, s, l] = rgbToHsl(r, g, b);

  return [r, g, b, h, s, l];
};

export const toRgbString = (r: number, g: number, b: number) => {
  return `rgb(${r}, ${g}, ${b})`;
};
