import { MAX_RGB_VALUE, MINIMUM_RGB_VALUE } from '@/lib/utils/constants';
import { getRgbFromHsl, rgbToHsl } from '@/lib/helpers/hsl';
import { getRgbFromHexCode } from '@/lib/helpers/hex';

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

export const getRgbValues = (colorCode: string) => {
  const rgbMatch = colorCode.replace(/[^\d,]/g, '').split(',');

  const hexMatch = colorCode
    .replace(/^#/, '')
    .match(/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{5}|[0-9A-Fa-f]{6})$/);

  const hslMatch = colorCode
    .replace(/hsl\s*/i, '')
    .replace(/[^\d.,\s]/g, '')
    .split(/[\s,]+/);

  if (
    rgbMatch &&
    rgbMatch.length === 3 &&
    colorCode.toLowerCase().startsWith('rgb')
  ) {
    return getRgbCodeFromRgbString(rgbMatch);
  }

  if (
    hslMatch &&
    colorCode.toLowerCase().startsWith('hsl') &&
    hslMatch.length === 3
  ) {
    return getRgbFromHsl(hslMatch);
  }

  if (hexMatch) {
    return getRgbFromHexCode(hexMatch);
  }

  return [undefined];
};

export const toRgbString = (r: number, g: number, b: number) => {
  return `rgb(${r}, ${g}, ${b})`;
};
