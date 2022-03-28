import React, {useEffect, useState} from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

export default function HalfDonoutChart() {


  const [distanceData, setDistanceData] = useState<any[]>([]);

  useEffect(() => {
    const fetchDistanceData = async () => {
      try {
        const response = await fetch(
          `https://industrial.api.ubidots.com/api/v1.6/devices/${process.env.REACT_APP_DISTANCE_DEVICE_ID}/${process.env.REACT_APP_DISTANCE_VARIABLE}/values`, {
            method: 'GET',
            headers: {
              'X-Auth-Token': `${process.env.REACT_APP_DISTANCE_TOKEN}`,
              'Content-Type': 'application/json'
            }
          },
        )
    
          const json = await response.json();
          setDistanceData(json.results)
        } catch (e) {
          console.error(e);
        }
    };

      fetchDistanceData();
    
  }, []);

let arrDistanceData:number[] = [];


for (let index = 0; index < distanceData.length; index++) {
  let data = 0
  if(distanceData[index].value === 0) {
    data = distanceData[index].value + 178
  } else {
      data = 178 - distanceData[index].value 
  }
  arrDistanceData.push(data)
} 


  const data = {
    datasets: [
      {
        data: [arrDistanceData[0], 178],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)'],
      },
    ],
  };

  const options = {
    rotation: -90,
    circumference: 180,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Doughnut data={data} options={options} width={389} height={260} />
    </div>
  );
}
