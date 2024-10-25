import Navbar from './components/navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <div className='flex min-h-screen w-full flex-col items-center justify-center gap-y-4'>
        <h1 className='text-3xl font-bold underline'>Hello world...!</h1>

        <h2 className='text-2xl font-semibold'>SimpleEnergy FE - Challenge</h2>
      </div>
    </>
  );
}
