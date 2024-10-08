import { PropsWithChildren } from 'react';

type ColorSwatchListContainerProps = PropsWithChildren;

export default function ColorSwatchListContainer({
  children,
}: ColorSwatchListContainerProps) {
  return (
    <div className="flex w-full flex-col items-center gap-y-3 rounded-lg border bg-surface px-2 py-3 shadow md:border-none md:bg-transparent md:shadow-none lg:flex-col-reverse">
      {children}
    </div>
  );
}
