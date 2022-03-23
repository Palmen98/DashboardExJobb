import React from 'react';
import DashboardCard from '../components/DashboardCard';
import EnvironmentalHouseActivity from '../components/EnvironmentalHouseActivity';
import Navbar from '../components/Navbar';
import PlasticBinGraph from '../components/PlasticBinGraph';

import GoogleMapsLocation from '../components/GoogleMapsLocation';
export default function Dashboard() {
  return (
    <div className='flex h-screen overflow-hidden bg-gray-300'>
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        <main>
          <nav>
            <Navbar />
          </nav>
              <GoogleMapsLocation />
          <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
            <div className='sm:flex sm:justify-between sm:items-center mb-8'></div>

            <div className='grid grid-cols-12 gap-6'>
                <DashboardCard />
                <PlasticBinGraph />
                <EnvironmentalHouseActivity />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
