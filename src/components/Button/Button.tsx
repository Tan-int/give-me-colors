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
        'rounded-md border px-2 py-1 text-sm hover:bg-foreground/5',
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
}
