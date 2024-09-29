import * as chroma from 'chroma.ts';
import ColorSwatchList from '@/components/ColorSwatchList';
import ColorSwatchListContainer from '../ColorSwatchListContainer';

type ColorSwatchSectionProps = {
  colorCode: string;
};

export default function ColorSwatchSection({
  colorCode,
}: ColorSwatchSectionProps) {
  const color = chroma.color(colorCode);
  const complementaryColor = color.set('hsl.h', hue => hue + 180);
  const splitComplementary = color.set('hsl.h', hue => hue - 120);

  // const tedtradicContrast = color.set('hsl.h', hue => hue + 90);
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

  // const tetradicPalette = chroma
  //   .scale(color, tedtradicContrast)
  //   .mode('lch')
  //   .colors(5);

  return (
    <div className="flex h-full w-full flex-col gap-y-4 rounded-3xl">
      <ColorSwatchListContainer>
        <h6 className="text-sm font-semibold">Lighter Shades</h6>
        <ColorSwatchList colorCodes={lighterShadePalette} />
      </ColorSwatchListContainer>
      <ColorSwatchListContainer>
        <h6 className="text-sm font-semibold">Darker Shades</h6>
        <ColorSwatchList colorCodes={darkerShadePalette} />
      </ColorSwatchListContainer>
      <ColorSwatchListContainer>
        <h6 className="text-sm font-semibold">Complementary Palette</h6>
        <ColorSwatchList colorCodes={complementaryPalette} />
      </ColorSwatchListContainer>
      <ColorSwatchListContainer>
        <h6 className="text-sm font-semibold">Split Complementary Palette</h6>
        <ColorSwatchList colorCodes={splitComplementaryPalette} />
      </ColorSwatchListContainer>
    </div>
  );
}
