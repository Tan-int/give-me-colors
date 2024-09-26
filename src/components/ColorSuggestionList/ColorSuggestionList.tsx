import { scale } from 'chroma.ts';
import Carousel from '@/components/Carousel';
import ColorSuggestion from '@/components/ColorSuggestion/ColorSuggestion';

type ColorSuggestionListProps = {
  hexCodes: string[];
  itemsToShow: number;
  numberOfSuggestions: number;
};

export default function ColorSuggestionList({
  hexCodes,
  itemsToShow,
  numberOfSuggestions,
}: ColorSuggestionListProps) {
  const colorSuggestions = scale(hexCodes).colors(numberOfSuggestions);

  return (
    <Carousel itemsToShow={itemsToShow}>
      {colorSuggestions.map(hex => (
        <ColorSuggestion key={hex} hex={hex} />
      ))}
    </Carousel>
  );
}
