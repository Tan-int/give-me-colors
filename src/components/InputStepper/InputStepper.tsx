import { cn } from '@/lib/utils/cn';
import { MinusCircle, PlusCircle } from 'lucide-react';

type InputStepperProps = {
  className?: string | undefined;
  label: string;
  onIncrease: () => void;
  onDecrease: () => void;
};

export default function InputStepper({
  className,
  label,
  onIncrease,
  onDecrease,
}: InputStepperProps) {
  return (
    <div
      className={cn(
        'flex w-fit flex-row gap-x-2 rounded-full bg-black bg-opacity-40 p-2 align-middle',
        className
      )}
    >
      <button onClick={onDecrease}>
        <MinusCircle className="h-4 w-4" color="#F6F8F9" />
      </button>
      <p className="text-xs text-[#F6F8F9]">{label}</p>
      <button onClick={onIncrease}>
        <PlusCircle className="h-4 w-4" color="#F6F8F9" />
      </button>
    </div>
  );
}
