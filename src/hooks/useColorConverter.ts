import { useState } from 'react';
import { getRgbFromHexCode, toHexString } from '@/lib/helpers/hex';
import { getRgbFromHsl, toHslString } from '@/lib/helpers/hsl';
import { getRgbCodeFromRgbString, toRgbString } from '@/lib/helpers/rgb';
import Color from '@/types/color';

const getRgbValues = (colorCode: string) => {
  const rgbMatch = colorCode.replace(/[^\d,]/g, '').split(',');

  const hexMatch = colorCode
    .replace(/^#/, '')
    .match(/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{5}|[0-9A-Fa-f]{6})$/);

  const hslMatch = colorCode.replace(/[^\d.,]/g, '').split(',');

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

export default function useColorConverter(colorCode: string) {
  const [r = 0, g = 0, b = 0] = getRgbValues(colorCode);
  const [color, setColor] = useState<Color>({
    red: r,
    green: g,
    blue: b,
    colorCode: colorCode,
  });

  if (r && g && b && colorCode !== color.colorCode) {
    setColor({
      red: r,
      green: g,
      blue: b,
      colorCode: colorCode,
    });
  }

  const { red, green, blue } = color;

  return {
    rgb: toRgbString(red, green, blue),
    hex: toHexString(red, green, blue),
    hsl: toHslString(red, green, blue),
  };
}
