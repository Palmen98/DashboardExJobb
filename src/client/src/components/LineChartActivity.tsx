import React, {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';


export default function LineChartActivity() {
  const [activityData, setActivityData] = useState<any[]>([]);


 useEffect(() => {
  const fetchMagnetData = async () => {
    try {
        const response = await fetch(
          `https://industrial.api.ubidots.com/api/v1.6/devices/${process.env.REACT_APP_MAGNET_DEVICE_ID}/${process.env.REACT_APP_MAGNET_VARIABLE}/values`, {
            method: 'GET',
            headers: {
              'X-Auth-Token': `${process.env.REACT_APP_MAGNET_TOKEN}`,
              'Content-Type': 'application/json'
            }
          },
        )

        const json = await response.json();
        setActivityData(json.results)
    } catch (e) {
        console.error(e);
    }
};

    fetchMagnetData();
  
}, []);
  
let arrActivityTimes:number[] = [];
let arrTimeStamps: string[] = [];

for (let index = 0; index < activityData.length; index++) {
  arrActivityTimes.push(activityData[index].value)
  let changeTimestamp =  new Intl.DateTimeFormat('sv-SE', {hour: '2-digit', minute: '2-digit'}).format(activityData[index].timestamp)
  arrTimeStamps.push(changeTimestamp)
}

arrActivityTimes.sort((a,b) => a -b )
arrTimeStamps.reverse()


    const data:any = {
        labels: arrTimeStamps,
        datasets: [
          {
            label: 'Activity Today',
            data: arrActivityTimes,
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