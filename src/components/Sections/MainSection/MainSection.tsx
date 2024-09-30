import { ReactNode } from 'react';

type MainSectionProps = {
  className?: string | undefined;
  children: ReactNode;
};

export default function MainSection({ className, children }: MainSectionProps) {
  return <div className={className}>{children}</div>;
}
