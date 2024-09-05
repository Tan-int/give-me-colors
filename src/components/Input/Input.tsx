import { ChangeEvent } from 'react';

type InputProps = {
  input: string | undefined;
  setInput: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ input, setInput }: InputProps) {
  return (
    <input
      value={input}
      onChange={setInput}
      type="text"
      className="boder-1 border border-black"
    />
  );
}
