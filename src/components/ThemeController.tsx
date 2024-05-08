import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from '@/hooks/useTheme';

function ThemeController() {
  const { dark, toggleTheme } = useTheme();
  return (
    <div className="flex justify-end">
      <div className='inline-flex cursor-pointer' onClick={toggleTheme}>
        { 
          dark 
          ? <MoonIcon fill="black" className='h-6 max-w-full'/>
          : <SunIcon fill="yellow" className='h-6 max-w-full'/>
       }
      </div>
    </div>
  );
}

export default ThemeController;