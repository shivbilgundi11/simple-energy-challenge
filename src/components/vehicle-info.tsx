import { useContext } from 'react';

import { FleetContext } from '@/context/store';

import AddNewVehicle from './add-vehicle';
import VehicleInfoTable from './vehicle-info-table';

export default function VehicleInfo() {
  const state = useContext(FleetContext);

  console.log(state);

  return (
    <>
      <main className='container mt-3 h-auto w-full'>
        {/* ------Add-New-Vehicle------ */}
        <div className='mb-4 flex h-auto w-full'>
          <AddNewVehicle />
        </div>

        <VehicleInfoTable />
      </main>
    </>
  );
}
