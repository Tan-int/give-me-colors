type ColorInfoProps = {
  colorModel: string;
  colorCode: string;
};

export default function ColorInfo({ colorModel, colorCode }: ColorInfoProps) {
  return (
    <div className="flex border">
      <div className="flex items-center space-x-2">
        <div className="flex w-[55px] items-center justify-center bg-[#252525] px-3 py-2">
          <span>{colorModel}</span>
        </div>
        <span>{colorCode}</span>
      </div>
    </div>
  );
}
