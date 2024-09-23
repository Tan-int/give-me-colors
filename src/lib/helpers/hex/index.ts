import { HEX_NUMBER_FORMAT } from '@/lib/utils/constants';
import { rgbToHsl } from '../hsl';

export const getRgbFromHexCode = (hexMatch: string[]) => {
  let r = 0,
    g = 0,
    b = 0;

  if (hexMatch.length === 0) {
    return [r, g, b];
  }

  let hexCode = hexMatch[0];

  //convert shorthand hex code to six digit
  if (hexCode.length === 3) {
    hexCode = hexCode
      .split('')
      .map(char => char + char)
      .join('');
  }

  const colorChannels = hexCode.replace(/^#/, '').match(/.{1,2}/g);
  if (colorChannels) {
    [r, g, b] = colorChannels.map(colorChannel => {
      const value = parseInt(colorChannel, HEX_NUMBER_FORMAT);
      return isNaN(value) ? 0 : value;
    });
  }

  const [h, s, l] = rgbToHsl(r, g, b);

  return [r, g, b, h, s, l];
};

export const toHexString = (r: number, g: number, b: number) => {
  const toHex = (colorChannel: number) => {
    const hex = colorChannel.toString(16);

    const hexCode = hex.length === 1 ? '0' + hex : hex;

    return hexCode.toUpperCase();
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};
