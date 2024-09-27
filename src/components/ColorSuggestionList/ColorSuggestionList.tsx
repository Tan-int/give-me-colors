import Carousel from '@/components/Carousel';
import ColorSuggestion from '@/components/ColorSuggestion/ColorSuggestion';

type ColorSuggestionListProps = {
  colorCodes: string[];
};

export default function ColorSuggestionList({
  colorCodes,
}: ColorSuggestionListProps) {
  return (
    <Carousel itemsToShow={4}>
      {colorCodes.map(color => (
        <ColorSuggestion key={color} hex={color} />
      ))}
    </Carousel>
  );
}
