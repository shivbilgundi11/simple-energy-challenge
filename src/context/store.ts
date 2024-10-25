import { createContext, Dispatch } from 'react';

import { FleetAction, FleetState } from '@/lib/types';

interface FleetContextType {
  state: FleetState;
  dispatch: Dispatch<FleetAction>;
}

export const FleetContext = createContext<FleetContextType | undefined>(
  undefined,
);
