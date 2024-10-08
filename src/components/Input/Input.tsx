import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string | undefined;
};

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'rounded-md border bg-surface px-3 py-2 text-base placeholder:text-muted-foreground',
        className
      )}
      {...props}
    />
  );
}
