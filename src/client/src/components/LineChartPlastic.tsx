import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function LineChart() {
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
let arrTimeStamps: string[] = [];
let todaysDate = new Date().getDate()

for (let index = 0; index < distanceData.length; index++) {
  let data = 0
  if(distanceData[index].value === 0) {
    data = (distanceData[index].value = 178)
  } else {
     data = 178 - distanceData[index].value
  }
  arrDistanceData.push(data)
  let changeTimestamp =  new Intl.DateTimeFormat('sv-SE', {day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'}).format(distanceData[index].timestamp)
  if(todaysDate === Number(changeTimestamp.slice(0,2))) {
    arrTimeStamps.push(changeTimestamp)
  }
} 

arrDistanceData.reverse()
arrTimeStamps.reverse()


    const data:any = {
        labels: arrTimeStamps,
        datasets: [
          {
            label: 'Volume of waste Today',
            data: arrDistanceData,
            borderColor: ['rgba(255,99,132,1)'],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
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
