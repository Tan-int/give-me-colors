import { cn } from '@/lib/utils/cn';
import { ReactNode } from 'react';

type ColorInfoContainerProps = {
  className?: string | undefined;
  children: ReactNode;
};
export default function ColorInfoContainer({
  className,
  children,
}: ColorInfoContainerProps) {
  return (
    <div
      className={cn('flex w-full flex-col gap-y-1 border shadow', className)}
    >
      {children}
    </div>
  );
}
