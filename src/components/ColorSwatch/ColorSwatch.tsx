type ColorSwatchProps = {
  hex: string;
};

export default function ColorSwatch({ hex }: ColorSwatchProps) {
  // const hexToUpper = hex.toUpperCase();

  return (
    <div
      className="h-6 w-6 rounded-full md:h-16 md:w-full md:rounded-none lg:h-16 lg:w-full"
      style={{ backgroundColor: hex }}
    ></div>
  );
}
