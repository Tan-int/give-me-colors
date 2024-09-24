import { cn } from '@/lib/utils/cn';
import { MinusCircle, PlusCircle } from 'lucide-react';
import { ReactNode } from 'react';

type InputStepperProps = {
  className?: string | undefined;
  children: ReactNode;
  onIncrease: () => void;
  onDecrease: () => void;
};

export default function InputStepper({
  className,
  children,
  onIncrease,
  onDecrease,
}: InputStepperProps) {
  return (
    <div
      className={cn(
        'flex w-fit flex-row items-center rounded-full bg-black bg-opacity-40 px-2',
        className
      )}
    >
      <button onClick={onDecrease}>
        <MinusCircle className="h-3 w-3" color="#F6F8F9" />
      </button>
      <div className="mx-2 border-l border-r p-1">{children}</div>
      <button onClick={onIncrease}>
        <PlusCircle className="h-3 w-3" color="#F6F8F9" />
      </button>
    </div>
  );
}
