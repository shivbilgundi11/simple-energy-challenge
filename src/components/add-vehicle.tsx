import { useContext, useEffect, useState } from 'react';
import { LuPlus } from 'react-icons/lu';

import { FleetContext } from '@/context/store';

import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
} from './ui/dialog';
import { Input } from './ui/input';

export default function AddNewVehicle({ vehicleToEdit }) {
  const { dispatch } = useContext(FleetContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false); // State for edit mode

  // State for form fields
  const [formData, setFormData] = useState({
    id: '',
    vehicleName: '',
    batteryPercentage: '',
    totalDistance: '',
    lastChargeTime: '',
    status: 'Idle', // default status
  });

  useEffect(() => {
    if (vehicleToEdit) {
      setIsEditMode(true);
      setFormData({
        id: vehicleToEdit.id,
        vehicleName: vehicleToEdit.vehicleName,
        batteryPercentage: vehicleToEdit.batteryPercentage,
        totalDistance: vehicleToEdit.totalDistance,
        lastChargeTime: vehicleToEdit.lastChargeTime,
        status: vehicleToEdit.status,
      });
      setIsOpen(true);
    }
  }, [vehicleToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newVehicle = {
      id: formData.id,
      vehicleName: formData.vehicleName,
      batteryPercentage: parseInt(formData.batteryPercentage, 10),
      totalDistance: parseFloat(formData.totalDistance),
      lastChargeTime: formData.lastChargeTime,
      status: formData.status,
    };

    if (isEditMode) {
      dispatch({
        type: 'UpdateVehicle',
        payload: { id: formData.id, updatedData: newVehicle },
      });
    } else {
      dispatch({ type: 'AddNewVehicle', payload: newVehicle });
    }

    resetForm();
    setIsOpen(false);
  };

  const resetForm = () => {
    setFormData({
      id: '',
      vehicleName: '',
      batteryPercentage: '',
      totalDistance: '',
      lastChargeTime: '',
      status: 'Idle',
    });
    setIsEditMode(false);
  };

  return (
    <>
      <main className='container mt-3 h-auto w-full'>
        <div className='mb-4 flex h-auto w-full items-center justify-end'>
          <Button
            variant={'outline'}
            className='border-2 hover:border-black hover:dark:border-gray-300'
            onClick={() => {
              resetForm();
              setIsOpen(true);
            }}
          >
            Add Vehicle <LuPlus />
          </Button>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogOverlay />
          <DialogContent>
            <DialogTitle>
              {isEditMode ? 'Edit Vehicle' : 'Add New Vehicle'}
            </DialogTitle>
            <DialogDescription>
              Fill in the details of the vehicle you want to{' '}
              {isEditMode ? 'edit' : 'add'}.
            </DialogDescription>

            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label htmlFor='id' className='block'>
                  Vehicle ID
                </label>
                <Input
                  type='text'
                  id='id'
                  name='id'
                  value={formData.id}
                  onChange={handleChange}
                  className='input'
                  placeholder='Enter vehicle ID'
                  required
                />
              </div>

              <div>
                <label htmlFor='vehicleName' className='block'>
                  Vehicle Name
                </label>
                <Input
                  type='text'
                  id='vehicleName'
                  name='vehicleName'
                  value={formData.vehicleName}
                  onChange={handleChange}
                  className='input'
                  placeholder='Enter vehicle name'
                  required
                />
              </div>

              <div>
                <label htmlFor='batteryPercentage' className='block'>
                  Battery Percentage
                </label>
                <Input
                  type='number'
                  id='batteryPercentage'
                  name='batteryPercentage'
                  value={formData.batteryPercentage}
                  onChange={handleChange}
                  className='input'
                  placeholder='Enter battery percentage'
                  required
                  min={0}
                  max={100}
                />
              </div>

              <div>
                <label htmlFor='totalDistance' className='block'>
                  Distance Traveled (km)
                </label>
                <Input
                  type='number'
                  id='totalDistance'
                  name='totalDistance'
                  value={formData.totalDistance}
                  onChange={handleChange}
                  className='input'
                  placeholder='Enter total distance'
                  required
                  min={0}
                />
              </div>

              <div>
                <label htmlFor='lastChargeTime' className='block'>
                  Last Charged
                </label>
                <Input
                  type='datetime-local'
                  id='lastChargeTime'
                  name='lastChargeTime'
                  value={formData.lastChargeTime}
                  onChange={handleChange}
                  className='input'
                  required
                />
              </div>

              <div>
                <label htmlFor='status' className='block'>
                  Status
                </label>
                <Input
                  type='text'
                  id='status'
                  name='status'
                  value={formData.status}
                  onChange={handleChange}
                  className='input'
                  placeholder='Enter vehicle status'
                  required
                />
              </div>

              <div className='flex justify-end'>
                <Button
                  type='button'
                  variant='outline'
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
                <Button type='submit' className='ml-2'>
                  {isEditMode ? 'Update Vehicle' : 'Add Vehicle'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </main>
    </>
  );
}
