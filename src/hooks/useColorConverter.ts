import { useState } from 'react';
import { getRgbFromHexCode, toHexString } from '@/lib/helpers/hex';
import {
  getRgbFromHsl,
  hslToRgb,
  rgbToHsl,
  toHslString,
} from '@/lib/helpers/hsl';
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
  const [r = 0, g = 0, b = 0, h = 0, s = 0, l = 0] = getRgbValues(colorCode);
  const [color, setColor] = useState<Color>({
    red: r,
    green: g,
    blue: b,
    hue: h,
    saturation: s,
    lightness: l,
    colorCode: colorCode,
  });

  if (r && g && b && colorCode !== color.colorCode) {
    setColor({
      red: r,
      green: g,
      blue: b,
      hue: h,
      saturation: s,
      lightness: l,
      colorCode: colorCode,
    });
  }

  const { red, green, blue, hue, saturation, lightness } = color;

  const lighten = () => {
    const [h, s, l] = rgbToHsl(red, green, blue);
    const increasedLightness = Math.min(1, l * 1.1);
    const [r, g, b] = hslToRgb(h * 360, s * 100, increasedLightness * 100);

    setColor({
      ...color,
      red: r,
      green: g,
      blue: b,
      lightness: increasedLightness,
    });
  };

  return {
    rgb: toRgbString(red, green, blue),
    hex: toHexString(red, green, blue),
    hsl: toHslString(hue, saturation, lightness),
    lighten,
  };
}
