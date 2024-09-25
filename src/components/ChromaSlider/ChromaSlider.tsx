import { InputHTMLAttributes, ReactNode } from 'react';
import './index.css';

type InputStepperProps = InputHTMLAttributes<HTMLInputElement> & {
  children: [ReactNode, ReactNode];
  onIncrease: () => void;
  onDecrease: () => void;
};

export default function ChromaSlider({
  children,
  onIncrease,
  onDecrease,
  ...props
}: InputStepperProps) {
  const [DecreaseIcon, IncreaseIcon] = children;
  return (
    <div className="input-stepper">
      <button onClick={onDecrease}>{DecreaseIcon}</button>
      <input className="input-range accent-[#F6F8F9]" type="range" {...props} />
      <button onClick={onIncrease}>{IncreaseIcon}</button>
    </div>
  );
}
