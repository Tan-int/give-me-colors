export function useColor(colorCode: string) {
  const color = {
    hex: rgbToHex(colorCode),
    rgb: hexToRgb(colorCode),
    hsl: '',
  };

  return color;
}

export const rgbToHex = (colorCode: string) => {
  const match = colorCode.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);

  const toHex = (colorChannel: number) => {
    const hex = colorChannel.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  if (match) {
    const [, r, g, b] = match.map(colorChannel => parseInt(colorChannel));
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }
  return '';
};

export const hexToRgb = (colorCode: string) => {
  // TODO: handle shorthand hex code
  const HEX_NUMBER_FORMAT = 16;
  const match = colorCode.replace(/^#/, '').match(/.{1,2}/g);

  if (match) {
    const [r, g, b] = match.map(hex => parseInt(hex, HEX_NUMBER_FORMAT));
    return `rgb(${r}, ${g}, ${b})`;
  }

  return '';
};
