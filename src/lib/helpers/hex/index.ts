export const getHexCode = (match: string[]) => {
  const HEX_NUMBER_FORMAT = 16;
  let r = 0,
    g = 0,
    b = 0;

  if (match.length === 0) {
    return [r, g, b];
  }

  let hexCode = match[0];

  if (hexCode.length === 3) {
    hexCode = hexCode
      .split('')
      .map(char => char + char)
      .join('');
  }

  const colorChannels = hexCode.replace(/^#/, '').match(/.{1,2}/g);
  if (colorChannels) {
    [r, g, b] = colorChannels.map(hex => {
      const value = parseInt(hex, HEX_NUMBER_FORMAT);
      return isNaN(value) ? 0 : value;
    });
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
