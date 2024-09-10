import { getRgbFromHexCode, toHexString } from '@/lib/helpers/hex';
import { getRgbFromHsl, toHslString } from '@/lib/helpers/hsl';
import { getRgbCodeFromRgbString, toRgbString } from '@/lib/helpers/rgb';

let hex = '';
let rgb = '';
let hsl = '';

export const colorPicker = (colorCode: string) => {
  const [r, g, b] = getColorCodeType(colorCode);

  if (r !== undefined && g !== undefined && b !== undefined) {
    hex = toHexString(r, g, b);
    rgb = toRgbString(r, g, b);
    hsl = toHslString(r, g, b);
  }

  return {
    colorCode: colorCode,
    rgb: rgb,
    hex: hex,
    hsl: hsl,
  };
};

const getColorCodeType = (colorCode: string) => {
  const rgbMatch = colorCode.replace(/[^\d,]/g, '').split(',');

  const hexMatch = colorCode
    .replace(/^#/, '')
    .match(/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{5}|[0-9A-Fa-f]{6})$/);

  const hslMatch = colorCode.replace(/[^\d,]/g, '').split(',');

  if (
    rgbMatch &&
    rgbMatch.length === 3 &&
    colorCode.toLowerCase().startsWith('rgb')
  ) {
    return getRgbCodeFromRgbString(rgbMatch);
  }

  if (hslMatch && colorCode.toLowerCase().startsWith('hsl')) {
    return getRgbFromHsl(hslMatch);
  }

  if (hexMatch) {
    return getRgbFromHexCode(hexMatch);
  }

  return [undefined];
};
