import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Initial Vehicle Data...
export const vehicles = [
  {
    id: 'b8e1f10e-0f51-4b7f-9ef7-6de78b0d97c2',
    batteryPercentage: 85,
    totalDistance: 120.5,
    lastChargeTime: '2024-10-25T10:30:00Z',
    status: 'In Transit',
  },
  {
    id: 'e83c0e7e-c5d4-4ebf-b3ee-e4f2e9f3d35e',
    batteryPercentage: 55,
    totalDistance: 200.7,
    lastChargeTime: '2024-10-24T15:00:00Z',
    status: 'On Charge',
  },
  {
    id: 'ea30f79f-fec5-41c8-9bfa-c1c2c5a63407',
    batteryPercentage: 100,
    totalDistance: 300.0,
    lastChargeTime: '2024-10-25T08:00:00Z',
    status: 'Idle',
  },
  {
    id: 'a4f3c74a-792f-4c31-9447-cc28b30b1161',
    batteryPercentage: 20,
    totalDistance: 50.3,
    lastChargeTime: '2024-10-24T20:15:00Z',
    status: 'In Transit',
  },
  {
    id: 'd1b51af0-1a4b-4f59-bb64-e82b6452ed5d',
    batteryPercentage: 75,
    totalDistance: 150.4,
    lastChargeTime: '2024-10-25T09:00:00Z',
    status: 'Idle',
  },
];
