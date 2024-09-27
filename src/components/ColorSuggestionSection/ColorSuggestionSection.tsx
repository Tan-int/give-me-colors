import { scale } from 'chroma.ts';
import ColorSuggestionList from '@/components/ColorSuggestionList';

type ColorSuggestionSectionProps = {
  color: string;
};

export default function ColorSuggestionSection({
  color,
}: ColorSuggestionSectionProps) {
  const shades = scale('white', color, 'black')
    .domain(0, 50, 100)
    .mode('lab')
    .correctLightness()
    .colors(12);

  return (
    <div className="flex h-full w-full flex-col items-center rounded-3xl bg-surface p-4">
      <ColorSuggestionList colorCodes={shades} />
    </div>
  );
}
