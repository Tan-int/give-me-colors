import { useState } from 'react';

export default function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return { isCopied, copyToClipboard };
}
