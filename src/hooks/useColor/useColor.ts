import { COLOR_CODE_TYPE } from '@/utils/constants';

let lastValidColorCode = 'rgb(0, 191, 255)';
let hex = '';
let rgb = '';

export const color = (colorCode: string) => {
  const colorCodeType = getColorCodeType(colorCode);

  if (colorCodeType) {
    lastValidColorCode = colorCode;
    hex = getHexCode(colorCode, colorCodeType);
    rgb = getRgbCode(colorCode, colorCodeType);
  }

  console.log(hex);
  return {
    colorCode: lastValidColorCode,
    rgb: rgb,
    hex: hex,
  };
};

const getRgbCode = (colorCode: string, colorCodeType: COLOR_CODE_TYPE) => {
  const match = colorCode
    .replace(/[^\d,]/g, '')
    .split(',')
    .filter(Boolean);

  let r = 0,
    g = 0,
    b = 0;
  if (colorCodeType === COLOR_CODE_TYPE.HEX) {
    [r, g, b] = hexToRgb(colorCode);
  }

  if (colorCodeType === COLOR_CODE_TYPE.HSL) {
    // hsl to rgb code here
  }

  if (match) {
    [r, g, b] = match.map(hex => parseInt(hex));
  }

  return toRgbString(r, g, b);
};

const getHexCode = (colorCode: string, colorCodeType: COLOR_CODE_TYPE) => {
  if (colorCodeType === COLOR_CODE_TYPE.RGB) {
    return rgbToHex(colorCode);
  }

  if (colorCodeType === COLOR_CODE_TYPE.HSL) {
    // hsl to hex here
  }

  return colorCode;
};

const rgbToHex = (colorCode: string) => {
  const match = colorCode
    .replace(/[^\d,]/g, '')
    .split(',')
    .filter(Boolean);

  const toHex = (colorChannel: number) => {
    const hex = colorChannel.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  if (match) {
    const [r, g, b] = match.map(colorChannel => parseInt(colorChannel));
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }
  return '';
};

const hexToRgb = (colorCode: string) => {
  let r = 0,
    g = 0,
    b = 0;
  // TODO: handle shorthand hex code
  const HEX_NUMBER_FORMAT = 16;
  const match = colorCode.replace(/^#/, '').match(/.{1,2}/g);

  if (match) {
    [r, g, b] = match.map(hex => parseInt(hex, HEX_NUMBER_FORMAT));
  }

  return [r, g, b];
};

const getColorCodeType = (colorCode: string) => {
  const rgbMatch = colorCode
    .replace(/[^\d,]/g, '')
    .split(',')
    .filter(Boolean);

  if (colorCode.startsWith('#') && colorCode.length === 7) {
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

const toRgbString = (r: number, g: number, b: number) => {
  return `rgb(${r}, ${g}, ${b})`;
};

const toHexString = (r: string, g: string, b: string) => {
  return `#${r}${g}${b}`;
};
