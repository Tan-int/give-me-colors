export const getHexCode = (match: string[]) => {
  let r = 0,
    g = 0,
    b = 0;
  // TODO: handle shorthand hex code
  const HEX_NUMBER_FORMAT = 16;

  if (match) {
    [r, g, b] = match.map(hex => parseInt(hex, HEX_NUMBER_FORMAT));
  }
  return [r, g, b];
};

export const toHexString = (r: number, g: number, b: number) => {
  const toHex = (colorChannel: number) => {
    const hex = colorChannel.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};
