import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string | undefined;
};

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'rounded-md border px-3 py-2 text-base text-input-foreground placeholder:text-muted-foreground',
        className
      )}
      {...props}
    />
  );
}
