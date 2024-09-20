import { cn } from '@/lib/utils/cn';
import { Copy } from 'lucide-react';

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
        <div className="flex w-full flex-row items-center justify-between">
          <p className="text-sm opacity-90">{colorCode}</p>
          <Copy className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
