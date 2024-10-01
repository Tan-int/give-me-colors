import { cn } from '@/lib/utils/cn';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string | undefined;
  label: string;
};
export default function Button({ className, label, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-md border px-3 py-2 text-sm font-medium hover:bg-foreground/5',
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
}
