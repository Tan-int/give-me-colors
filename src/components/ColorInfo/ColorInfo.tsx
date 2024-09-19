import { cn } from '@/lib/utils/cn';

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
    <div className={cn('flex flex-col gap-y-2', className)}>
      <h6 className="text-sm">{colorModel}</h6>
      <div className="flex flex-col gap-y-1">
        <p className="text-sm opacity-90">{colorCode}</p>
      </div>
    </div>
  );
}
