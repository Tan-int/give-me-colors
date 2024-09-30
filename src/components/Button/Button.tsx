import { cn } from '@/lib/utils/cn';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string | undefined;
  chldren: ReactNode;
};
export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn('rounded-md border px-2 py-1 text-sm', className)}
      {...props}
    >
      {children}
    </button>
  );
}
