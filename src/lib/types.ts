export interface FleetState {
  vehicles: [] | null;
}

export type FleetAction = { type: string; payload?: any };
