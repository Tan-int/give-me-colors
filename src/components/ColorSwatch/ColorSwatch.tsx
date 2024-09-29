type ColorSwatchProps = {
  hex: string;
};

export default function ColorSwatch({ hex }: ColorSwatchProps) {
  // const hexToUpper = hex.toUpperCase();

  return (
    <div
      className="h-6 w-6 rounded-full"
      style={{ backgroundColor: hex }}
    ></div>
  );
}
