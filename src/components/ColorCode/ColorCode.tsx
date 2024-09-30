import useCopyToClipboard from '@/hooks/useCopyToClipboard';
import { ClipboardCheck, Copy } from 'lucide-react';

type ColorCodeProps = {
  colorCode: string;
};

export default function ColorCode({ colorCode }: ColorCodeProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  const handleClick = () => {
    copyToClipboard(colorCode);
  };

  return (
    <div className="flex w-full flex-row items-center justify-between px-2 py-1">
      <p className="text-sm opacity-90">{colorCode}</p>
      <div
        className="rounded-md p-2 hover:cursor-pointer hover:bg-surface"
        onClick={handleClick}
      >
        {isCopied ? (
          <ClipboardCheck className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </div>
    </div>
  );
}
