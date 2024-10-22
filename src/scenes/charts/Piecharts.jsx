import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Piecharts = () => {
    const data = {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, ],
            backgroundColor: [
              '#60009B',
              '#B800D8',
              'rgba(255, 206, 86)',
              '#2E96FF'
            ],
            borderColor: [
              '#60009B',
              '#B800D8',
              'rgba(255, 206, 86)',
              '#2E96FF'
            ],
            borderWidth: 1,
            
          },
        ],
      };

    return (
        <div className='p-5 rounded shadow-sm h-64 bg-white rounded shadow-sm flex justify-center'>
            <Doughnut data={data} />
        </div>
    )
}

export default Piecharts