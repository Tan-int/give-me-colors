import { InputHTMLAttributes, ReactNode } from 'react';

type InputStepperProps = InputHTMLAttributes<HTMLInputElement> & {
  children: [ReactNode, ReactNode];
  onIncrease: () => void;
  onDecrease: () => void;
};

export default function InputRange({
  children,
  onIncrease,
  onDecrease,
  ...props
}: InputStepperProps) {
  const [DecreaseIcon, IncreaseIcon] = children;
  return (
    <div className="flex flex-row items-center gap-x-1 rounded-full bg-black bg-opacity-40 p-2">
      <button onClick={onDecrease}>{DecreaseIcon}</button>
      <input className="h-1 w-24 accent-[#F6F8F9]" type="range" {...props} />
      <button onClick={onIncrease}>{IncreaseIcon}</button>
    </div>
  );
}
