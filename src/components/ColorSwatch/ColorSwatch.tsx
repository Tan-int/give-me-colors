import useCopyToClipboard from '@/hooks/useCopyToClipboard';
import { ClipboardCheck } from 'lucide-react';

type ColorSwatchProps = {
  hex: string;
};

export default function ColorSwatch({ hex }: ColorSwatchProps) {
  const hexToUpper = hex.toUpperCase();
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  const handleClick = () => {
    copyToClipboard(hex);
  };

  return (
    <div
      className="group flex size-full h-7 w-7 items-center justify-center rounded-full md:relative md:h-16 md:w-full md:rounded-none lg:w-full"
      style={{ backgroundColor: hex }}
      onClick={handleClick}
    >
      {isCopied && (
        <div className="rounded-full bg-black/30 p-1 md:hidden">
          <ClipboardCheck className="h-4 w-4" color="#F6F8F9" />
        </div>
      )}

      <div className="invisible hidden min-w-[70px] rounded-tl-md bg-black/30 p-1 group-hover:visible md:absolute md:bottom-0 md:right-0 md:block">
        <div className="flex w-full justify-center">
          <p className="text-xs font-semibold text-[#F6F8F9]">
            {isCopied ? 'Copied' : hexToUpper}
          </p>
        </div>
      </div>
    </div>
  );
}
