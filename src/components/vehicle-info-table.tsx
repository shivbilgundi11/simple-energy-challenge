import { useContext, useState } from 'react';

import { FleetContext } from '@/context/store';

import AddNewVehicle from './add-vehicle';
import { Button } from './ui/button';
import {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

const tableSections = [
  { id: 1, name: 'Id' },
  { id: 2, name: 'Vehicle Name' },
  { id: 3, name: 'Battery %' },
  { id: 4, name: 'Distance Traveled (km)' },
  { id: 5, name: 'Last Charged' },
  { id: 6, name: 'Status' },
  { id: 7, name: 'Edit' },
  { id: 8, name: 'Remove' },
];

const VehicleInfoTable = () => {
  const { state, dispatch } = useContext(FleetContext);

  // State variables for modal and form management
  const [isOpen, setIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editVehicle, setEditVehicle] = useState(null);

  const handleEdit = (vehicle) => {
    // Set the vehicle to be edited and open the modal
    setEditVehicle(vehicle);
    setIsEditMode(true);
    setIsOpen(true);
  };

  const handleDelete = (vehicleId) => {
    dispatch({ type: 'DeleteVehicle', payload: vehicleId });
  };

  return (
    <div className='overflow-x-auto border-t'>
      <AddNewVehicle
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isEditMode={isEditMode}
        vehicleToEdit={editVehicle}
      />
      <table className='w-full min-w-full divide-y divide-gray-200'>
        <TableHeader className='border bg-black dark:bg-white'>
          <TableRow className='hover:bg-black hover:dark:bg-white'>
            {tableSections?.map((section) => (
              <TableHead
                key={section.id}
                className='text-center text-white dark:text-black'
              >
                {section.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className='text-center'>
          {state.vehicles &&
            state.vehicles.map((vehicle) => (
              <TableRow key={vehicle.id}>
                <TableCell className='font-medium'>{vehicle.id}</TableCell>
                <TableCell>{vehicle.vehicleName}</TableCell>
                <TableCell>{vehicle.batteryPercentage}%</TableCell>
                <TableCell>{vehicle.totalDistance} km</TableCell>
                <TableCell>
                  {new Date(vehicle.lastChargeTime).toLocaleString()}
                </TableCell>
                <TableCell>{vehicle.status}</TableCell>
                <TableCell>
                  <Button variant='link' onClick={() => handleEdit(vehicle)}>
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant='link'
                    onClick={() => handleDelete(vehicle.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter className='min-w-full'>
          <TableRow className='w-full'>
            <TableCell colSpan={7}>Total Vehicles</TableCell>
            <TableCell className='text-right'>
              {state.vehicles.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </table>
    </div>
  );
};

export default VehicleInfoTable;
