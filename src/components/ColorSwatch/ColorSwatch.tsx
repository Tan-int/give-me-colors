import useCopyToClipboard from '@/hooks/useCopyToClipboard';
import { ClipboardCheck } from 'lucide-react';

type ColorSwatchProps = {
  hex: string;
};

export default function ColorSwatch({ hex }: ColorSwatchProps) {
  // const hexToUpper = hex.toUpperCase();
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  const handleClick = () => {
    copyToClipboard(hex);
  };

  return (
    <div
      className="flex size-full h-7 w-7 items-center justify-center rounded-full md:h-16 md:w-full md:rounded-none lg:w-full"
      style={{ backgroundColor: hex }}
      onClick={handleClick}
    >
      {isCopied && (
        <div className="input-stepper rounded-full p-1">
          <ClipboardCheck className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}
