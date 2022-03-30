import React from 'react'
import LineChartActivity from './LineChartActivity';
function EnvironmentalHouseActivity() {
    return (
        <div className='flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200'>
          <div className='px-5 pt-5'>
            <header className='flex justify-between items-start mb-2'>
              <h2 className='text-lg font-semibold text-slate-800 mb-2'>
               Plastic activity
              </h2>
            </header>
          </div>
          <div className='grow'>
          <LineChartActivity />
          </div>
        </div>
    );
} 

export default EnvironmentalHouseActivity