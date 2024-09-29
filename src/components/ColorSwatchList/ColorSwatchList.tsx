import ColorSwatch from '@/components/ColorSwatch';

type ColorSwatchListProps = {
  colorCodes: string[];
};

export default function ColorSwatchList({ colorCodes }: ColorSwatchListProps) {
  return (
    <div className="flex flex-row gap-x-6">
      {colorCodes.map(color => (
        <ColorSwatch key={color} hex={color} />
      ))}
    </div>
  );
}
