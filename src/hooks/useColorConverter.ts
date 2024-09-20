import { useState, useEffect } from 'react';
import { getRgbFromHexCode, toHexString } from '@/lib/helpers/hex';
import { getRgbFromHsl, toHslString } from '@/lib/helpers/hsl';
import { getRgbCodeFromRgbString, toRgbString } from '@/lib/helpers/rgb';

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

export default function useColorConverter(initialColorCode: string) {
  const [colorCode, setColorCode] = useState<string>(initialColorCode);
  const [rgb, setRgb] = useState('');
  const [hex, setHex] = useState('');
  const [hsl, setHsl] = useState('');

  useEffect(() => {
    const [r, g, b] = getRgbValues(colorCode);

    if (r !== undefined && g !== undefined && b !== undefined) {
      setHex(toHexString(r, g, b));
      setRgb(toRgbString(r, g, b));
      setHsl(toHslString(r, g, b));
    }
  }, [colorCode]);

  const updateColorCode = (newColorCode: string) => {
    setColorCode(newColorCode);
  };

  return {
    colorCode,
    rgb,
    hex,
    hsl,
    updateColorCode,
  };
}
