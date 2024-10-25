import { ReactNode, useReducer } from 'react';

import { FleetContext } from '@/context/store';
import { FleetAction, FleetState } from '@/lib/types';

interface FleetProviderProps {
  children: ReactNode;
}

export default function FleetContextProvider({ children }: FleetProviderProps) {
  const initialValue: FleetState = { vehicles: null };

  const [state, dispatch] = useReducer(
    (state: FleetState, action: FleetAction) => state,
    initialValue,
  );

  return (
    <FleetContext.Provider value={{ state, dispatch }}>
      {children}
    </FleetContext.Provider>
  );
}
