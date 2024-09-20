import {
  MAX_HUE_VALUE,
  MAXIMUM_LIGHTNESS_VALUE,
  MAXIMUM_SATURATION_VALUE,
  MINIMUM_HUE_VALUE,
  MINIMUM_LIGHTNESS_VALUE,
  MINIMUM_SATURATION_VALUE,
} from '@/lib/utils/constants';

//TODO: Handle decimal inputs

export const getRgbFromHsl = (colorChannels: string[]) => {
  const [hue, saturation, lightness] = colorChannels;
  return hslToRgb(hue, saturation, lightness);
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

function hslToRgb(h: string, s: string, l: string) {
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

const getAdjustedHue = (hue: string) => {
  let parsedHue = parseInt(hue);

  if (parsedHue > MAX_HUE_VALUE) parsedHue = MAX_HUE_VALUE;

  if (parsedHue < MINIMUM_HUE_VALUE) parsedHue = MINIMUM_HUE_VALUE;

  // range of hue is 0-360, hsl to rgb function expects hue to be in the [0, 1] set
  return parsedHue / MAX_HUE_VALUE;
};

const getAdjustedSaturation = (saturation: string) => {
  let parsedSaturation = parseFloat(saturation);
  if (parsedSaturation > MAXIMUM_SATURATION_VALUE)
    parsedSaturation = MAXIMUM_SATURATION_VALUE;

  if (parsedSaturation < MINIMUM_SATURATION_VALUE)
    parsedSaturation = MINIMUM_SATURATION_VALUE;

  // range of saturation is 0-100, hsl to rgb function expects saturation to be in the [0, 1] set
  return parsedSaturation / MAXIMUM_SATURATION_VALUE;
};

const getAdjustedLightness = (lightness: string) => {
  let parsedLightness = parseFloat(lightness);

  if (parsedLightness > MAXIMUM_LIGHTNESS_VALUE)
    parsedLightness = MAXIMUM_LIGHTNESS_VALUE;

  if (parsedLightness < MINIMUM_LIGHTNESS_VALUE)
    parsedLightness = MINIMUM_LIGHTNESS_VALUE;

  // range of saturation is 0-100, hsl to rgb function expects saturation to be in the [0, 1] set
  return parsedLightness / MAXIMUM_LIGHTNESS_VALUE;
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

export function toHslString(r: number, g: number, b: number) {
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

  const hue = round(h * 360); // h is in [0, 1] set, convert this to 0-360 range
  const saturation = round(s * 100); // s is in [0, 1] set, convert to percentage
  const lightness = round(l * 100); // l is in [0, 1] set, convert to percentage

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
