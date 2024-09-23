import {
  MAX_HUE_VALUE,
  MAXIMUM_LIGHTNESS_VALUE,
  MAXIMUM_SATURATION_VALUE,
  MINIMUM_HUE_VALUE,
  MINIMUM_LIGHTNESS_VALUE,
  MINIMUM_SATURATION_VALUE,
} from '@/lib/utils/constants';

export const getRgbFromHsl = (colorChannels: string[]) => {
  const [h, s, l] = colorChannels;

  const hue = parseInt(h);
  const saturation = parseInt(s);
  const lightness = parseInt(l);
  const [r, g, b] = hslToRgb(hue, saturation, lightness);

  return [r, g, b, hue, saturation, lightness];
};

const { min, max, round } = Math;

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from https://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {string}  h       The hue
 * @param   {string}  s       The saturation
 * @param   {string}  l       The lightness
 * @return  {Array}           The RGB representation
 */

export function hslToRgb(h: number, s: number, l: number) {
  let r: number, g: number, b: number;
  const hue = getAdjustedHue(h);
  const saturation = getAdjustedSaturation(s);
  const lightness = getAdjustedLightness(l);

  if (saturation === 0) {
    r = g = b = lightness; // achromatic
  } else {
    const q =
      lightness < 0.5
        ? lightness * (1 + saturation)
        : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    r = hueToRgb(p, q, hue + 1 / 3);
    g = hueToRgb(p, q, hue);
    b = hueToRgb(p, q, hue - 1 / 3);
  }

  return [round(r * 255), round(g * 255), round(b * 255)];
}

function hueToRgb(p: number, q: number, t: number) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

const getAdjustedHue = (hue: number) => {
  if (hue > MAX_HUE_VALUE) hue = MAX_HUE_VALUE;

  if (hue < MINIMUM_HUE_VALUE) hue = MINIMUM_HUE_VALUE;

  // range of hue is 0-360, hsl to rgb function expects hue to be in the [0, 1] set
  return hue / MAX_HUE_VALUE;
};

const getAdjustedSaturation = (saturation: number) => {
  if (saturation > MAXIMUM_SATURATION_VALUE)
    saturation = MAXIMUM_SATURATION_VALUE;

  if (saturation < MINIMUM_SATURATION_VALUE)
    saturation = MINIMUM_SATURATION_VALUE;

  // range of saturation is 0-100, hsl to rgb function expects saturation to be in the [0, 1] set
  return saturation / MAXIMUM_SATURATION_VALUE;
};

const getAdjustedLightness = (lightness: number) => {
  if (lightness > MAXIMUM_LIGHTNESS_VALUE) lightness = MAXIMUM_LIGHTNESS_VALUE;

  if (lightness < MINIMUM_LIGHTNESS_VALUE) lightness = MINIMUM_LIGHTNESS_VALUE;

  // range of saturation is 0-100, hsl to rgb function expects saturation to be in the [0, 1] set
  return lightness / MAXIMUM_LIGHTNESS_VALUE;
};

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   {number}  r       The red color value
 * @param   {number}  g       The green color value
 * @param   {number}  b       The blue color value
 * @return  {Array}           The HSL representation
 */

export function toHslString(
  hue: number,
  saturation: number,
  lightness: number
) {
  const roundedHue = round(hue);
  const roundedSaturation = round(saturation);
  const roundedLightness = round(lightness);
  return `hsl(${roundedHue}, ${roundedSaturation}%, ${roundedLightness}%)`;
}

// returns hsl in the [0, 360], [0,1], [0,1] set
export function rgbToHsl(r: number, g: number, b: number) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const vmax = max(red, green, blue);
  const vmin = min(red, green, blue);

  let h = 0;
  let s = 0;
  const l = (vmax + vmin) / 2;

  if (vmax !== vmin) {
    const difference = vmax - vmin;
    s = l > 0.5 ? difference / (2 - vmax - vmin) : difference / (vmax + vmin);
    if (vmax === red) h = (green - blue) / difference + (green < blue ? 6 : 0);
    else if (vmax === green) h = (blue - red) / difference + 2;
    else if (vmax === blue) h = (red - green) / difference + 4;
    h /= 6;
  }

  const hue = h * 360; // h is in [0, 1] set, convert this to 0-360 range
  const saturation = s * 100; // s is in [0, 1] set, convert to percentage
  const lightness = l * 100; // l is in [0, 1] set, convert to percentage

  return [hue, saturation, lightness];
}
