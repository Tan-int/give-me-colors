import { getHexCode, toHexString } from '@/lib/helpers/hex';
import { getRgbCode, toRgbString } from '@/lib/helpers/rgb';

let lastValidColorCode = 'rgb(0, 191, 255)';
let hex = '';
let rgb = '';

export const colorPicker = (colorCode: string) => {
  const [r, g, b] = getColorCodeType(colorCode);

  if (r !== undefined && g !== undefined && b !== undefined) {
    lastValidColorCode = colorCode;
    hex = toHexString(r, g, b);
    rgb = toRgbString(r, g, b);
  }

  return {
    colorCode: lastValidColorCode,
    rgb: rgb,
    hex: hex,
  };
};

const getColorCodeType = (colorCode: string) => {
  const rgbMatch = colorCode.replace(/[^\d,]/g, '').split(',');

  const hexMatch = colorCode
    .replace(/^#/, '')
    .match(/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{5}|[0-9A-Fa-f]{6})$/);

  if (
    rgbMatch &&
    rgbMatch.length === 3 &&
    colorCode.toLowerCase().startsWith('rgb')
  ) {
    return getRgbCode(rgbMatch);
  }

  if (colorCode.toLowerCase().startsWith('hsl')) {
    return [0, 0, 0];
  }

  if (hexMatch) {
    return getHexCode(hexMatch);
  }

  return [undefined];
};
