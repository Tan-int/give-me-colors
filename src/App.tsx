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
import InputRange from '@/components/ChromaSlider';
import { Droplet, Droplets, Moon, PartyPopper, SunDim } from 'lucide-react';
import ColorSwatchSection from '@/components/ColorSwatchSection';
import MainSection from '@/components/Sections/MainSection';
import Header from '@/components/Header';
import PageLayout from '@/components/PageLayout';
import ColorConversionSection from '@/components/Sections/ColorConversionSection';
import Github from '@/components/GithubIcon';
import Card from '@/components/Card';
import Button from '@/components/Button';
import ContributionSection from '@/components/Sections/ContributionSection';

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
      <PageLayout className="flex h-full w-full max-w-[1080px] flex-col px-8 pb-8 pt-4">
        <Appbar />
        <Header />
        <MainSection className="flex size-full flex-col gap-y-8 md:gap-y-4 lg:gap-y-12">
          <ColorConversionSection className="flex flex-row gap-x-4">
            <div className="flex w-full flex-col gap-y-8">
              <div className="flex flex-row items-center gap-x-4">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  className="flex-1 text-base"
                />
                <div
                  className="h-8 w-8 rounded-full md:hidden"
                  style={{ backgroundColor: hex }}
                ></div>
              </div>
              <ColorInfoContainer>
                <ColorInfo colorModel="HEX" colorCode={hex} />
                <hr />
                <ColorInfo colorModel="RGB" colorCode={rgb} />
                <hr />
                <ColorInfo colorModel="HSL" colorCode={hsl} />
              </ColorInfoContainer>
            </div>
            <div
              className="group relative hidden size-full min-h-[200px] w-full md:block"
              style={{ background: hex }}
            >
              <div className="slider-container invisible group-hover:visible">
                <InputRange
                  value={lightness}
                  onChange={onLightnessRangeChange}
                  onIncrease={lighten}
                  onDecrease={darken}
                  min={MINIMUM_LIGHTNESS_VALUE}
                  max={MAXIMUM_LIGHTNESS_VALUE}
                >
                  <Moon className="h-3 w-3" color="#F6F8F9" />
                  <SunDim className="h-3 w-3" color="#F6F8F9" />
                </InputRange>

                <InputRange
                  value={saturation}
                  onChange={onSaturationRangeChange}
                  onIncrease={saturate}
                  onDecrease={desaturate}
                  min={MINIMUM_SATURATION_VALUE}
                  max={MAXIMUM_SATURATION_VALUE}
                >
                  <Droplet className="h-3 w-3" color="#F6F8F9" />
                  <Droplets className="h-3 w-3" color="#F6F8F9" />
                </InputRange>
              </div>
            </div>
          </ColorConversionSection>
          <ColorSwatchSection colorCode={hex} />
          <ContributionSection>
            <Card>
              <Github />
              <div className="flex flex-col">
                <h5 className="font-semibold">Contribute!</h5>
                <p className="text-sm">
                  This tool is free and open source. Feel free to contribute!
                </p>
              </div>
              <div className="w-full">
                <a
                  href="https://github.com/Tan-int/give-me-colors"
                  target="_blank"
                >
                  <Button label="Contribute" />
                </a>
              </div>
            </Card>
            <Card>
              <PartyPopper />
              <div className="flex flex-col">
                <h5 className="font-semibold">Ad Free!</h5>
                <p className="text-sm">
                  This tool will stay ad free. Send me a coffee if you're
                  feeling generous!
                </p>
              </div>
              <div className="w-full">
                <Button label="Send Coffee" />
              </div>
            </Card>
          </ContributionSection>
        </MainSection>
      </PageLayout>
    </div>
  );
}

export default App;
