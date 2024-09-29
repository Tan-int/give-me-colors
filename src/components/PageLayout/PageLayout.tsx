import { ReactNode } from 'react';

type PageLayoutProps = {
  className?: string | undefined;
  children: ReactNode;
};

export default function PageLayout({ className, children }: PageLayoutProps) {
  return <div className={className}>{children}</div>;
}
