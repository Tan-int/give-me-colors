import { COLOR_CODE_TYPE } from '@/lib/utils/constants';

export const getRgbCode = (
  colorCode: string,
  colorCodeType: COLOR_CODE_TYPE
) => {
  const match = colorCode
    .replace(/[^\d,]/g, '')
    .split(',')
    .filter(Boolean);

  let r = 0,
    g = 0,
    b = 0;
  if (colorCodeType === COLOR_CODE_TYPE.HEX) {
    [r, g, b] = hexToRgb(colorCode);
  } else if (colorCodeType === COLOR_CODE_TYPE.HSL) {
    // hsl to rgb code here
  } else if (match) {
    [r, g, b] = match.map(hex => parseInt(hex));
  }

  return toRgbString(r, g, b);
};

export const hexToRgb = (colorCode: string) => {
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

const toRgbString = (r: number, g: number, b: number) => {
  return `rgb(${r}, ${g}, ${b})`;
};
