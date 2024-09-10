import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string | undefined;
};

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn('rounded-full px-6 py-4 text-xl', className)}
      {...props}
    />
  );
}
