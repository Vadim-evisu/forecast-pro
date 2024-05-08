import { Combobox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import type { ILocation } from '../types';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useLocationSearch } from '../hooks/useLocationSearch';

const LocationSearcher = () => {
  
  const {
    location,
    locations,
    handleSearch,
    handleLocation
  } = useLocationSearch();
  

  return (
    <div className="w-full">
      <Combobox value={location} onChange={handleLocation}>
        <div className="relative">
          <Combobox.Input 
            className="w-full p-2 pr-6 rounded-sm text-primary"
            placeholder="City name, state code and country code"
            displayValue={(item: ILocation) => item.name.length ?
              item.name
              : ''
            }
            onChange={handleSearch}
            />
          <Combobox.Button
            className="
              absolute 
              -translate-y-1/2
              top-1/2
              right-0
              flex
              items-center
              pr-2
              bg-transparent
              "
              >
            {({ open }) => (
              <ChevronDownIcon
                className={`text-primary w-4 h-4 ${open ? '-scale-y-100' : ''}`}
                />
            )}
          </Combobox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => ({})}
          >
            <Combobox.Options
              className='
                absolute
                mt-1
                max-h-60
                w-full
                overflow-auto
                rounded-md
                bg-white
                text-primary
                shadow-lg ring-1 ring-black/5 focus:outline-none'>
              {locations.map((item, idx) => (
                <Combobox.Option
                  key={`${item.lat}-${item.lon}-${idx}`}
                  value={item}
                  className={({ active }) => 
                    `select-none py-2 pl-2 pr-4 ${
                      active ? 'bg-black text-white' : ''
                    }`}
                  >
                  {item.name}, {item.country}
                  {item.state && <span>, {item.state}</span> }
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default LocationSearcher;