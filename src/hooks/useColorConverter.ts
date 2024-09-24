import { useState } from 'react';
import { toHexString } from '@/lib/helpers/hex';
import { hslToRgb, toHslString } from '@/lib/helpers/hsl';
import { getRgbValues, toRgbString } from '@/lib/helpers/rgb';
import Color from '@/types/color';
import {
  LIGHTNESS_SCALE,
  LIGHTNESS_THRESHOLD,
  MAXIMUM_LIGHTNESS_VALUE,
  MAXIMUM_SATURATION_VALUE,
  MINIMUM_LIGHTNESS_VALUE,
  MINIMUM_SATURATION_VALUE,
  SATURATION_SCALE,
  SATURATION_THRESHOLD,
} from '@/lib/utils/constants';

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
        : Math.min(MAXIMUM_LIGHTNESS_VALUE, lightness * LIGHTNESS_SCALE); // set lightness to threshold when it is zero

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
        : Math.max(MINIMUM_LIGHTNESS_VALUE, lightness / LIGHTNESS_SCALE); // set lightness to zero when lightness is at threshold

    const [r, g, b] = hslToRgb(hue, saturation, decreasedLightness);

    setColor({
      ...color,
      red: r,
      green: g,
      blue: b,
      lightness: decreasedLightness,
    });
  };

  const saturate = () => {
    const increasedSaturation =
      saturation === MINIMUM_SATURATION_VALUE
        ? SATURATION_THRESHOLD
        : Math.min(MAXIMUM_SATURATION_VALUE, saturation * SATURATION_SCALE); // set saturation to threshold when saturation is zero

    const [r, g, b] = hslToRgb(hue, increasedSaturation, lightness);

    setColor({
      ...color,
      red: r,
      green: g,
      blue: b,
      saturation: increasedSaturation,
    });
  };

  const desaturate = () => {
    const decreasedSaturation =
      saturation <= SATURATION_THRESHOLD
        ? MINIMUM_SATURATION_VALUE
        : Math.max(MINIMUM_SATURATION_VALUE, saturation / SATURATION_SCALE); // set saturation to zero when saturation is at the threshold

    const [r, g, b] = hslToRgb(hue, decreasedSaturation, lightness);

    setColor({
      ...color,
      red: r,
      green: g,
      blue: b,
      saturation: decreasedSaturation,
    });
  };

  return {
    rgb: toRgbString(red, green, blue),
    hex: toHexString(red, green, blue),
    hsl: toHslString(hue, saturation, lightness),
    lighten,
    darken,
    saturate,
    desaturate,
  };
}
