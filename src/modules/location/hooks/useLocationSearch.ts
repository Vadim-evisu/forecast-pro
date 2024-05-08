import { useState } from 'react';
import type { ILocation } from '../types';
import { apiRepository } from '@/repositories';
import { useLocation, useLocationDispatcher } from '@/context/LocationContext';
import { useLocationStorage } from './useLocationStorage';
const geocodingRepository = apiRepository.geocoding;

const useLocationSearch = () => {
  const initValue = useLocation();
  const locationDispatcher = useLocationDispatcher();
  const { storeLocation } = useLocationStorage();

  const [ location, setLocation ] = useState<ILocation>(initValue);
  const [ locations, setLocations ] = useState<ILocation[]>([]);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const minLength = 3;
    const searcQuery = event.target.value;
    if (searcQuery.length < minLength) return;
    const items = await geocodingRepository.getDirectLocation(
      { query: { q: searcQuery, limit: 5 }
    });
    setLocations(items);
  };

  const handleLocation = (value: ILocation) => {
    setLocation(value);
    if (locationDispatcher !== null) {
      locationDispatcher({
        type: 'UPDATE',
        payload: value
      });
    }
    storeLocation(value);
  };


  return {
    location,
    locations,
    handleSearch,
    handleLocation
  };
};

export { useLocationSearch };