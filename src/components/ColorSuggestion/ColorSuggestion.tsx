type ColorSuggestionProps = {
  hex: string;
};

export default function ColorSuggestion({ hex }: ColorSuggestionProps) {
  const hexToUpper = hex.toUpperCase();

  return (
    <div className="flex min-w-[60px] flex-col items-center gap-y-1">
      <div
        className="h-6 w-6 rounded-full"
        style={{ backgroundColor: hex }}
      ></div>
      <p className="text-xs">{hexToUpper}</p>
    </div>
  );
}
