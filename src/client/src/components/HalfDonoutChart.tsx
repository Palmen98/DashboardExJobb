import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

export default function HalfDonoutChart() {
  const data = {
    datasets: [
      {
        data: [40, 60],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
        ],
      },
    ],
  };

  const options = {
    rotation: -90,
    circumference: 180,
    title: {
      display: true,
    },
  };

  return (
    <div>
      <Doughnut data={data} options={options} width={200} height={200} />
    </div>
  );
}
