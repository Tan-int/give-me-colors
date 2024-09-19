import { colorPicker } from '@/lib/services/colorPicker';
import ColorInfoContainer from '@components/ColorInfoContainer';
import { INITIAL_COLOR_CODE } from '@/lib/utils/constants';
import Appbar from '@components/Appbar';
import Input from '@components/Input';
import { ChangeEvent, useState } from 'react';
import ColorInfo from './components/ColorInfo';

function App() {
  const [input, setInput] = useState<string>(INITIAL_COLOR_CODE);
  const color = colorPicker(input);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setInput(input);
  };

  return (
    <div className="flex h-screen flex-col pb-4">
      <Appbar />
      <div className="flex h-full w-full flex-col items-center px-12 pb-12">
        <div className="mb-6 flex w-full flex-col items-center">
          <h1 className="text-2xl font-semibold">Color Converter</h1>
          <p className="text-sm opacity-60">
            Convert between HEX, RGB, and HSL color formats
          </p>
        </div>
        <div className="flex h-full w-full flex-col gap-y-8 lg:flex-row lg:gap-x-8">
          <div className="flex w-full flex-col gap-y-8">
            <Input
              value={input}
              onChange={handleInputChange}
              className="text-base"
            />
            <ColorInfoContainer>
              <ColorInfo colorModel="HEX" colorCode={color.hex} />
              <hr />
              <ColorInfo colorModel="HSL" colorCode={color.hsl} />
              <hr />
              <ColorInfo colorModel="RGB" colorCode={color.rgb} />
            </ColorInfoContainer>
          </div>
          <div
            className="size-full min-h-[200px]"
            style={{ background: color.hex }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
