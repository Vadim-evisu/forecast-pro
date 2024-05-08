import { createContext, useContext, useReducer, type Dispatch } from 'react';
import type { ILocation } from '@/modules/location';
import { locationReducer, type IAction } from '@/reducer/locationReducer';

const initialLocation: ILocation = {
  name: '',
  lat: 0,
  lon: 0,
  country: '',
};

const LocationContext = createContext<ILocation>(initialLocation);
const LocationDispatchContext = createContext<Dispatch<IAction> | null>(null);

const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [ location, dispatchLocation ] = useReducer(
    locationReducer,
    initialLocation
  );

  return (
    <LocationContext.Provider value={location}>
      <LocationDispatchContext.Provider value={dispatchLocation}>
        {children}
      </LocationDispatchContext.Provider>
    </LocationContext.Provider>
  );
};

const useLocation = () => useContext(LocationContext);
const useLocationDispatcher = () => useContext(LocationDispatchContext);

// eslint-disable-next-line react-refresh/only-export-components
export { LocationProvider, useLocation, useLocationDispatcher };
