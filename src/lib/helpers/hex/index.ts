import { COLOR_CODE_TYPE } from '@/lib/utils/constants';

export const getHexCode = (
  colorCode: string,
  colorCodeType: COLOR_CODE_TYPE
) => {
  const match = colorCode.replace(/^#/, '').match(/.{1,2}/g);
  let r = '00',
    g = '00',
    b = '00';
  if (colorCodeType === COLOR_CODE_TYPE.RGB) {
    [r, g, b] = rgbToHex(colorCode);
  } else if (colorCodeType === COLOR_CODE_TYPE.HSL) {
    // hsl to hex here
  } else if (match) {
    [r, g, b] = match;
  }

  return toHexString(r, g, b);
};

export const rgbToHex = (colorCode: string) => {
  let r = 0,
    g = 0,
    b = 0;
  const match = colorCode
    .replace(/[^\d,]/g, '')
    .split(',')
    .filter(Boolean);

  const toHex = (colorChannel: number) => {
    const hex = colorChannel.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  if (match) {
    [r, g, b] = match.map(colorChannel => parseInt(colorChannel));
  }
  return [toHex(r), toHex(g), toHex(b)];
};

export const toHexString = (r: string, g: string, b: string) => {
  return `#${r}${g}${b}`;
};
