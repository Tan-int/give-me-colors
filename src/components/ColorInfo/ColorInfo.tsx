import { cn } from '@/lib/utils/cn';
import ColorCode from '@components/ColorCode';

type ColorInfoProps = {
  className?: string | undefined;
  colorModel: string;
  colorCode: string;
};

export default function ColorInfo({
  className,
  colorModel,
  colorCode,
}: ColorInfoProps) {
  return (
    <div className={cn('flex flex-col gap-y-1 p-2', className)}>
      <h6 className="text-sm">{colorModel}</h6>
      <div className="flex flex-col gap-y-1">
        <ColorCode colorCode={colorCode} />
      </div>
    </div>
  );
}
