import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';


const Charts = () => {

    return (
        <>
            {/* Bar Charts  */}
            <div className='col-span-3  p-2 bg-white rounded shadow-sm flex justify-center'>
                <BarChart
                    xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C','group D'] }]}
                    series={[{ data: [4, 3, 5,6] }, { data: [1, 6, 3,1] }, { data: [2, 5, 6,9] },{ data: [2, 5, 6,3] }]}
                    width={700}
                    height={350}
                />
            </div>
        </>
    )
}

export default Charts