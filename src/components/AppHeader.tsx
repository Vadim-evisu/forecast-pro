import { LocationSearcher } from '@/modules/location';
import AppLogo from './AppLogo/AppLogo';
import ThemeController from './ThemeController';

function AppHeader() {
  return (
    <header className="shrink-0">
      <div className="container">
        <div className="py-4 flex justify-between items-center">
          <div className="basis-2/12">
            <AppLogo />
          </div>
          <div className="basis-6/12">
          <LocationSearcher />
          </div>
          <div className="basis-2/12">
            <ThemeController />
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;