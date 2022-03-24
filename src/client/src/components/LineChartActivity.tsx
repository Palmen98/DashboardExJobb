import React, {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function LineChartActivity() {
  const [activityData, setActivityData] = useState()

  useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch(
              'https://environmental-house-dashboard.firebaseapp.com/api/magnet', {
                mode: 'no-cors',
                method: 'GET'
              },
            )
            console.log(response.json())
            // const json = await response.json();
            // setActivityData(json)
            console.log(activityData)
        } catch (e) {
            console.error(e);
        }
    };
    fetchData();
}, []);
  
    

    const data:any = {
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', 
        '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
        datasets: [
          {
            label: 'Activity Today',
            data: [0, 0, 5, 10, 12, 170, 0, 27],
            borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)'],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15
          }
        ]
      };


    const config:Object = {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: (ctx:any) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
            }
          }
        }
      };

  

  return (
    <div>
      <Line data={data} options={config} width={389} height={260} />
    </div>
  );
}