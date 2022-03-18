import React from 'react'

function GoogleMapsLocation() {
  return (
        <div className='lg:w-full md:w-1/2 h-52 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative mx-auto'>
            <iframe
              width='100%'
              height='100%'
              title='map'
              className='absolute inset-0'
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: 'opacity(0.7)' }}
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.6451826889858!2d16.332781955839295!3d56.6612693833528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4657d18093750105%3A0x48e34a8d1c13748c!2sStensbergsv%C3%A4gen%2017%2C%20392%2044%20Kalmar!5e1!3m2!1ssv!2sse!4v1647623823791!5m2!1ssv!2sse'
            />
    </div> 
  )
}

export default GoogleMapsLocation