import { logo } from '@/assets';
import { ThemeToggle, Github } from '@/components';

export default function Appbar() {
  return (
    <div className="flex w-full justify-between">
      <div className="h-auto w-8">
        <img src={logo} />
      </div>
      <div className="flex w-full items-center justify-end gap-x-4">
        <a href="https://github.com/Tan-int/give-me-colors" target="_blank">
          <Github />
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
}
