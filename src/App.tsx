import Input from '@components/Input';
import { ChangeEvent, useState } from 'react';
import { colorPicker } from './lib/services/colorPicker';

function App() {
  const [input, setInput] = useState<string>('hsl(120, 100%, 50%)');
  const color = colorPicker(input);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setInput(input);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-7 bg-black">
      <div className="flex flex-row gap-x-4">
        <h5 className="semi-bold text-lg text-white">{color.hex}</h5>
        <h5 className="semi-bold text-lg text-white">{color.rgb}</h5>
        <h5 className="semi-bold text-lg text-white">{color.hsl}</h5>
      </div>
      <Input input={input} setInput={handleInputChange} />
      <div
        className="h-[200px] w-[200px]"
        style={{ backgroundColor: color.hex }}
      ></div>
    </div>
  );
}

export default App;
