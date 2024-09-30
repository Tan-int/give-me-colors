import ColorSwatch from '@/components/ColorSwatch';

type ColorSwatchListProps = {
  colorCodes: string[];
};

export default function ColorSwatchList({ colorCodes }: ColorSwatchListProps) {
  return (
    <div className="flex flex-row gap-x-6 md:w-full md:gap-x-1 lg:flex-col-reverse">
      {colorCodes.map(color => (
        <ColorSwatch key={color} hex={color} />
      ))}
    </div>
  );
}
