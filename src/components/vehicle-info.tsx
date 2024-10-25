import { useContext } from 'react';
import { LuPlus } from 'react-icons/lu';

import { FleetContext } from '@/context/store';

import { Button } from './ui/button';

export default function VehicleInfo() {
  const state = useContext(FleetContext);

  console.log(state);

  return (
    <>
      <main className='container mt-3 h-auto w-full'>
        {/* ------Add-New-Vehicle------ */}
        <div className='flex h-auto w-full items-center justify-end'>
          <Button
            variant={'outline'}
            className='border-2 hover:border-black hover:dark:border-gray-300'
          >
            Add Vehicle <LuPlus />
          </Button>
        </div>
      </main>
    </>
  );
}
