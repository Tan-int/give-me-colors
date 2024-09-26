type ColorSuggestionProps = {
  hex: string;
};

export default function ColorSuggestion({ hex }: ColorSuggestionProps) {
  return (
    <div className="flex min-w-[55px] flex-col items-center">
      <div
        className="h-6 w-6 rounded-full"
        style={{ backgroundColor: hex }}
      ></div>
      <p className="text-sm">{hex}</p>
    </div>
  );
}
