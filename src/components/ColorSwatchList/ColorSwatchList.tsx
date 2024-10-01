import { ColorSwatch } from '@/components';

type ColorSwatchListProps = {
  colorCodes: string[];
};

export default function ColorSwatchList({ colorCodes }: ColorSwatchListProps) {
  return (
    <div className="flex flex-row gap-x-6 md:w-full md:gap-x-1 lg:flex-col-reverse">
      {colorCodes.map((color, index) => (
        <ColorSwatch key={index} hex={color} />
      ))}
    </div>
  );
}
