import Input from '@components/Input';
import { ChangeEvent, useState } from 'react';
import { colorPicker } from './lib/services/colorPicker';
import { INITIAL_COLOR_CODE } from './lib/utils/constants';

function App() {
  const [input, setInput] = useState<string>(INITIAL_COLOR_CODE);
  const color = colorPicker(input);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setInput(input);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center px-12 pt-20">
      <Input
        className="h-auto w-full"
        value={input}
        onChange={handleInputChange}
      />
      {/* <div
        className="h-[200px] w-[200px]"
        style={{ backgroundColor: color.hex }}
      ></div> */}
    </div>
  );
}

export default App;
