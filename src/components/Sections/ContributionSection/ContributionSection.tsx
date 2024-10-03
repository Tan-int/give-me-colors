import { ReactNode } from 'react';

type ContributionSectionProps = {
  children: ReactNode;
};

export default function ContributionSection({
  children,
}: ContributionSectionProps) {
  return (
    <div className="mt-2 flex h-full w-full flex-col gap-y-4 pb-6 md:mt-8 md:flex-row md:gap-x-4 lg:mt-12">
      {children}
    </div>
  );
}
