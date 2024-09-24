import Appbar from '@/components/Appbar';
import ColorInfo from '@/components/ColorInfo';
import ColorInfoContainer from '@/components/ColorInfoContainer';
import Input from '@/components/Input';
import useColorConverter from '@/hooks/useColorConverter';
import {
  INITIAL_COLOR_CODE,
  MAXIMUM_LIGHTNESS_VALUE,
  MAXIMUM_SATURATION_VALUE,
  MINIMUM_LIGHTNESS_VALUE,
  MINIMUM_SATURATION_VALUE,
} from '@/lib/utils/constants';
import { ChangeEvent, useState } from 'react';
import InputRange from './components/InputRange';
import { Droplet, Droplets, Moon, SunDim } from 'lucide-react';

function App() {
  const [input, setInput] = useState<string>(INITIAL_COLOR_CODE);
  const {
    rgb,
    hex,
    hsl,
    saturation,
    lightness,
    saturate,
    desaturate,
    lighten,
    darken,
    onLightnessRangeChange,
    onSaturationRangeChange,
  } = useColorConverter(input);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setInput(input);
  };

  return (
    <div className="flex h-screen flex-col items-center">
      <div className="flex h-full w-full max-w-[1280px] flex-col px-8 pb-8 pt-4">
        <Appbar />
        <div className="mb-6 flex w-full flex-col items-center">
          <h1 className="text-2xl font-semibold">Color Converter</h1>
          <p className="text-sm opacity-60">
            Convert between HEX, RGB, and HSL color formats
          </p>
        </div>
        <div className="flex h-full w-full flex-col gap-y-8 md:h-fit md:flex-row md:gap-x-8">
          <div className="flex w-full flex-col gap-y-8">
            <Input
              value={input}
              onChange={handleInputChange}
              className="text-base"
            />
            <ColorInfoContainer>
              <ColorInfo colorModel="HEX" colorCode={hex} />
              <hr />
              <ColorInfo colorModel="RGB" colorCode={rgb} />
              <hr />
              <ColorInfo colorModel="HSL" colorCode={hsl} />
            </ColorInfoContainer>
          </div>
          <div
            className="relative size-full min-h-[200px]"
            style={{ background: hex }}
          >
            <div className="absolute bottom-4 flex w-full flex-row justify-center gap-x-8">
              <InputRange
                value={lightness}
                onChange={onLightnessRangeChange}
                onIncrease={lighten}
                onDecrease={darken}
                min={MINIMUM_LIGHTNESS_VALUE}
                max={MAXIMUM_LIGHTNESS_VALUE}
              >
                <Moon className="h-4 w-4" color="#F6F8F9" />
                <SunDim className="h-4 w-4" color="#F6F8F9" />
              </InputRange>

              <InputRange
                value={saturation}
                onChange={onSaturationRangeChange}
                onIncrease={saturate}
                onDecrease={desaturate}
                min={MINIMUM_SATURATION_VALUE}
                max={MAXIMUM_SATURATION_VALUE}
              >
                <Droplet className="h-4 w-4" color="#F6F8F9" />
                <Droplets className="h-4 w-4" color="#F6F8F9" />
              </InputRange>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
