import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import { MainWeatherPreview } from './modules/weather';

function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <AppHeader />
      <main className="grow">
        <div className="container">
          <MainWeatherPreview />
        </div>
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
