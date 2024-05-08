import type { ILocation } from '@/modules/location';

const ILcationActions = {
  UPDATE: 'UPDATE'
} as const;

type IAction = { type: typeof ILcationActions.UPDATE; payload: ILocation };

const updateLocation = (locationState: ILocation, payload: ILocation) => {
  return {
    ...locationState,
    ...payload
  };
};

const locationReducer = (locationState: ILocation, action: IAction) => {
  switch(action.type) {
    case ILcationActions.UPDATE:
      return updateLocation(locationState, action.payload);
    default: return locationState; 
  }
};

export type { IAction };
export { locationReducer };