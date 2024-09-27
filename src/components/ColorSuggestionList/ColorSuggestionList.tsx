import ColorSuggestion from '@/components/ColorSuggestion/ColorSuggestion';

type ColorSuggestionListProps = {
  colorCodes: string[];
};

export default function ColorSuggestionList({
  colorCodes,
}: ColorSuggestionListProps) {
  return (
    <div className="flex flex-row">
      {colorCodes.map(color => (
        <ColorSuggestion key={color} hex={color} />
      ))}
    </div>
  );
}
