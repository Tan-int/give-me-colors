import { logo } from '@/assets';
import ThemeToggle from '@components/ThemeToggle';
import Github from '@components/GithubIcon';

export default function Appbar() {
  return (
    <div className="flex w-full justify-between px-3 pb-2 pt-6 md:px-14">
      <div className="h-auto w-12">
        <img src={logo} />
      </div>
      <div className="flex w-full items-center justify-end gap-x-4 pr-3">
        <a href="https://github.com/Tan-int/give-me-colors" target="_blank">
          <Github />
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
}
