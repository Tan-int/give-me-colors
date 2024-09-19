type ColorInfoProps = {
  colorModel: string;
  colorCode: string;
};

export default function ColorInfo({ colorModel, colorCode }: ColorInfoProps) {
  return (
    <div className="flex flex-col gap-y-1">
      <h6 className="text-sm">{colorModel}</h6>
      <div className="flex flex-col gap-y-1 border px-3 py-2">
        <p className="text-sm opacity-90">{colorCode}</p>
      </div>
    </div>
  );
}
