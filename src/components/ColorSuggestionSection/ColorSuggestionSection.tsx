import * as chroma from 'chroma.ts';
import ColorSuggestionList from '@/components/ColorSuggestionList';

type ColorSuggestionSectionProps = {
  colorCode: string;
};

export default function ColorSuggestionSection({
  colorCode,
}: ColorSuggestionSectionProps) {
  const color = chroma.color(colorCode);
  const complementaryColor = color.set('hsl.h', hue => hue + 180);
  const splitComplementary = color.set('hsl.h', hue => hue - 120);

  const tedtradicContrast = color.set('hsl.h', hue => hue + 90);
  const lighterVersion = color.brighter(2);
  const darkerVersion = color.darker(2);

  const lighterShadePalette = chroma
    .scale(color, lighterVersion)
    .mode('lab')
    .correctLightness()
    .colors(5);

  const darkerShadePalette = chroma
    .scale(color, darkerVersion)
    .mode('lab')
    .correctLightness()
    .colors(5);

  const complementaryPalette = chroma
    .scale(color, complementaryColor)
    .mode('lch')
    .colors(5);

  const splitComplementaryPalette = chroma
    .scale(color, splitComplementary)
    .mode('lch')
    .colors(5);

  const tetradicPalette = chroma
    .scale(color, tedtradicContrast)
    .mode('lch')
    .colors(5);

  return (
    <div className="flex h-full w-full flex-col items-center rounded-3xl bg-surface p-4">
      <ColorSuggestionList colorCodes={lighterShadePalette} />
      <ColorSuggestionList colorCodes={darkerShadePalette} />
      <ColorSuggestionList colorCodes={complementaryPalette} />
      <ColorSuggestionList colorCodes={splitComplementaryPalette} />
      <ColorSuggestionList colorCodes={tetradicPalette} />
    </div>
  );
}
