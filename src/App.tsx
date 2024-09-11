import { colorPicker } from '@/lib/services/colorPicker';
import { INITIAL_COLOR_CODE } from '@/lib/utils/constants';
import Appbar from '@components/Appbar';
import Input from '@components/Input';
import { ChangeEvent, useState } from 'react';

function App() {
  const [input, setInput] = useState<string>(INITIAL_COLOR_CODE);
  const color = colorPicker(input);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setInput(input);
  };

  return (
    <div className="flex h-screen flex-col">
      <Appbar />
      <div className="flex h-full w-full flex-col items-center px-12 pb-12">
        <div className="mb-8 mt-4 flex w-full flex-col items-center">
          <h1 className="text-2xl font-semibold">Color Converter</h1>
          <p className="text-sm opacity-60">
            Convert between HEX, RGB, and HSL color formats
          </p>
        </div>
        <div className="h-full w-full border p-6">
          <Input
            value={input}
            onChange={handleInputChange}
            className="w-full text-base"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
