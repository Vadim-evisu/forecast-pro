import { useEffect } from 'react';
import type { ILocation } from '../types';
import StorageService from '@/services/localStorageSerivce';
import { useLocationDispatcher } from '@/context/LocationContext';

const localStorage = new StorageService();

const useLocationStorage = () => {
  const locationDispatcher = useLocationDispatcher();

  
  const storeLocation = (value: ILocation) => {
    localStorage.store('location', value);
  };
  
  useEffect(() => {
    const storedLocation = localStorage.get('location');
    const location = storedLocation.success 
      ? storedLocation.value as ILocation 
      : undefined;
    if (location && locationDispatcher !== null) {
      locationDispatcher({
        type: 'UPDATE',
        payload: location
      });
    }

  }, [ locationDispatcher ]);

  

  return {
    storeLocation
  };
};

export { useLocationStorage };