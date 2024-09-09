export const getRgbCode = (match: string[]) => {
  let r = 0,
    g = 0,
    b = 0;

  if (match) {
    [r, g, b] = match.map(hex => parseInt(hex));
  }

  return [r, g, b];
};

export const toRgbString = (r: number, g: number, b: number) => {
  return `rgb(${r}, ${g}, ${b})`;
};
