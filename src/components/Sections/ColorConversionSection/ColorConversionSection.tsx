import { ReactNode } from 'react';

type ColorConversionSectionProps = {
  className?: string | undefined;
  children: ReactNode;
};

export default function ColorConversionSection({
  className,
  children,
}: ColorConversionSectionProps) {
  return <div className={className}>{children}</div>;
}
