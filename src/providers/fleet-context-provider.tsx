import { ReactNode, useReducer } from 'react';

import { FleetContext } from '@/context/store';
import { FleetAction, FleetState } from '@/lib/types';
import { vehicles } from '@/lib/utils';

interface FleetProviderProps {
  children: ReactNode;
}

export default function FleetContextProvider({ children }: FleetProviderProps) {
  const initialValue: FleetState = { vehicles: [...vehicles] };

  const reducerFunction = (state: FleetState, action: FleetAction) => {
    switch (action.type) {
      case 'AddNewVehicle':
        return {
          ...state,
          vehicles: [...state.vehicles, action.payload],
        };
      case 'UpdateVehicle':
        return {
          ...state,
          vehicles: state.vehicles.map((vehicle) =>
            vehicle.id === action.payload.id
              ? action.payload.updatedData
              : vehicle,
          ),
        };
      case 'DeleteVehicle':
        return {
          ...state,
          vehicles: state.vehicles.filter(
            (vehicle) => vehicle.id !== action.payload,
          ),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFunction, initialValue);

  return (
    <FleetContext.Provider value={{ state, dispatch }}>
      {children}
    </FleetContext.Provider>
  );
}
