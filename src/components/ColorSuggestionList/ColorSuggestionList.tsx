import { scale } from 'chroma.ts';
import Carousel from '@/components/Carousel';

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
    <div className="flex w-fit flex-row items-center gap-x-4">
      <Carousel itemsToShow={itemsToShow}>
        {colorSuggestions.map(hex => (
          <div className="flex flex-col items-center">
            <div
              className="h-6 w-6 rounded-full"
              style={{ backgroundColor: hex }}
            ></div>
            <p className="text-sm">{hex}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
