import { COLOR_CODE_TYPE } from '@/lib/utils/constants';
import { getHexCode } from '@/lib/helpers/hex';
import { getRgbCode } from '@/lib/helpers/rgb';

let lastValidColorCode = 'rgb(0, 191, 255)';
let hex = '';
let rgb = '';

export const colorPicker = (colorCode: string) => {
  const colorCodeType = getColorCodeType(colorCode);

  if (colorCodeType) {
    lastValidColorCode = colorCode;
    hex = getHexCode(colorCode, colorCodeType);
    rgb = getRgbCode(colorCode, colorCodeType);
  }

  return {
    colorCode: lastValidColorCode,
    rgb: rgb,
    hex: hex,
  };
};

const getColorCodeType = (colorCode: string) => {
  const rgbMatch = colorCode
    .replace(/[^\d,]/g, '')
    .split(',')
    .filter(Boolean);

  const hexMatch = colorCode.match(/[0-9A-Fa-f]{6}/g);

  if (hexMatch && colorCode.length === 7) {
    return COLOR_CODE_TYPE.HEX;
  }

  if (rgbMatch && rgbMatch.length === 3) {
    return COLOR_CODE_TYPE.RGB;
  }

  if (colorCode.toLowerCase().startsWith('hsl')) {
    return COLOR_CODE_TYPE.HSL;
  }

  return null;
};
