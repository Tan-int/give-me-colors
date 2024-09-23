import { useState } from 'react';
import { getRgbFromHexCode, toHexString } from '@/lib/helpers/hex';
import { getRgbFromHsl, hslToRgb, toHslString } from '@/lib/helpers/hsl';
import { getRgbCodeFromRgbString, toRgbString } from '@/lib/helpers/rgb';
import Color from '@/types/color';
import {
  LIGHTNESS_SCALE,
  LIGHTNESS_THRESHOLD,
  MAXIMUM_LIGHTNESS_VALUE,
  MINIMUM_LIGHTNESS_VALUE,
} from '@/lib/utils/constants';

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
    const increasedLightness =
      lightness === MINIMUM_LIGHTNESS_VALUE
        ? LIGHTNESS_THRESHOLD
        : Math.min(MAXIMUM_LIGHTNESS_VALUE, lightness * LIGHTNESS_SCALE);
    const [r, g, b] = hslToRgb(hue, saturation, increasedLightness);

    setColor({
      ...color,
      red: r,
      green: g,
      blue: b,
      lightness: increasedLightness,
    });
  };

  const darken = () => {
    const decreasedLightness =
      lightness <= LIGHTNESS_THRESHOLD
        ? MINIMUM_LIGHTNESS_VALUE
        : Math.max(MINIMUM_LIGHTNESS_VALUE, lightness / LIGHTNESS_SCALE);

    const [r, g, b] = hslToRgb(hue, saturation, decreasedLightness);

    setColor({
      ...color,
      red: r,
      green: g,
      blue: b,
      lightness: decreasedLightness,
    });
  };

  return {
    rgb: toRgbString(red, green, blue),
    hex: toHexString(red, green, blue),
    hsl: toHslString(hue, saturation, lightness),
    lighten,
    darken,
  };
}
