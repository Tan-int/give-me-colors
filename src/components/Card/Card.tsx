import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};
export default function Card({ children }: CardProps) {
  return (
    <div className="flex h-fit w-full flex-col gap-y-4 rounded-lg bg-surface p-4">
      {children}
    </div>
  );
}
