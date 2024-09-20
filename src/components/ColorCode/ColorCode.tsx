import { Copy } from 'lucide-react';

type ColorCodeProps = {
  colorCode: string;
};

export default function ColorCode({ colorCode }: ColorCodeProps) {
  return (
    <div className="flex w-full flex-row items-center justify-between">
      <p className="text-sm opacity-90">{colorCode}</p>
      <Copy className="h-4 w-4" />
    </div>
  );
}
