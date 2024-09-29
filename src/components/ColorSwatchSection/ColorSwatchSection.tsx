import * as chroma from 'chroma.ts';
import ColorSwatchList from '@/components/ColorSwatchList';
import ColorSwatchListContainer from '@/components/ColorSwatchListContainer';

type ColorSwatchSectionProps = {
  colorCode: string;
};

export default function ColorSwatchSection({
  colorCode,
}: ColorSwatchSectionProps) {
  const NUMBER_OF_COLOR_SWATCHES = 5;
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
    .colors(NUMBER_OF_COLOR_SWATCHES);

  const darkerShadePalette = chroma
    .scale(color, darkerVersion)
    .mode('lab')
    .correctLightness()
    .colors(NUMBER_OF_COLOR_SWATCHES);

  const complementaryPalette = chroma
    .scale(color, complementaryColor)
    .mode('lch')
    .colors(NUMBER_OF_COLOR_SWATCHES);

  const splitComplementaryPalette = chroma
    .scale(color, splitComplementary)
    .mode('lch')
    .colors(NUMBER_OF_COLOR_SWATCHES);

  // const tetradicPalette = chroma
  //   .scale(color, tedtradicContrast)
  //   .mode('lch')
  //   .colors(NUMBER_OF_COLOR_SWATCHES);

  return (
    <div className="flex h-full w-full flex-col gap-y-4 rounded-3xl md:gap-y-2">
      <ColorSwatchListContainer>
        <ListHeader>Lighter Shades</ListHeader>
        <ColorSwatchList colorCodes={lighterShadePalette} />
      </ColorSwatchListContainer>
      <ColorSwatchListContainer>
        <ListHeader>Darker Shades</ListHeader>
        <ColorSwatchList colorCodes={darkerShadePalette} />
      </ColorSwatchListContainer>
      <ColorSwatchListContainer>
        <ListHeader>Complementary</ListHeader>
        <ColorSwatchList colorCodes={complementaryPalette} />
      </ColorSwatchListContainer>
      <ColorSwatchListContainer>
        <ListHeader>Split Complementary</ListHeader>
        <ColorSwatchList colorCodes={splitComplementaryPalette} />
      </ColorSwatchListContainer>
    </div>
  );
}

function ListHeader({ children }: { children: string }) {
  return <h6 className="text-sm font-semibold md:text-xs">{children}</h6>;
}
