import logo from '@/assets/logo.png';
import ThemeToggle from '@components/ThemeToggle';

export default function Appbar() {
  return (
    <div className="flex w-full justify-between px-2 py-2">
      <div className="relative w-12">
        <img src={logo} />
      </div>
      <div className="flex w-full justify-end px-3">
        <ThemeToggle />
      </div>
    </div>
  );
}
