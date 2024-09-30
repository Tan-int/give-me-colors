import { ReactNode } from 'react';

type ContributionSectionProps = {
  children: ReactNode;
};

export default function ContributionSection({
  children,
}: ContributionSectionProps) {
  return (
    <div className="flex h-full w-full flex-col gap-y-4 pb-6 md:flex-row md:gap-x-4 md:pt-2">
      {children}
    </div>
  );
}
