export interface FleetState {
  vehicles: any[] | null;
}

export type FleetAction = { type: string; payload?: any };
