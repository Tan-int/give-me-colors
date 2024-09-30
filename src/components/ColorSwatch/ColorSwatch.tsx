type ColorSwatchProps = {
  hex: string;
};

export default function ColorSwatch({ hex }: ColorSwatchProps) {
  // const hexToUpper = hex.toUpperCase();

  return (
    <div
      className="h-7 w-7 rounded-full md:h-16 md:w-full md:rounded-none lg:w-full"
      style={{ backgroundColor: hex }}
    ></div>
  );
}
