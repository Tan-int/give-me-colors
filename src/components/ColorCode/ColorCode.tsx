import { ClipboardCheck, Copy } from 'lucide-react';
import { useState } from 'react';

type ColorCodeProps = {
  colorCode: string;
};

export default function ColorCode({ colorCode }: ColorCodeProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(colorCode);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="flex w-full flex-row items-center justify-between px-2 py-1">
      <p className="text-sm opacity-90">{colorCode}</p>
      <div
        className="rounded-md p-2 hover:cursor-pointer hover:bg-surface"
        onClick={copyToClipboard}
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
