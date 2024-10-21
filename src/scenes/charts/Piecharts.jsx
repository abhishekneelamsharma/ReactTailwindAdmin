import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

const Piecharts = () => {

    const data1 = [
        { label: 'Group A', value: 400 },
        { label: 'Group B', value: 300 },
        { label: 'Group C', value: 300 },
        { label: 'Group D', value: 200 },
        { label: 'Group E', value: 278 },
        { label: 'Group F', value: 189 },
    ];

    const options = {
        legend: "none",
        pieSliceText: "label",
        title: "Swiss Language Use (100 degree rotation)",
        pieStartAngle: 100,
    };

    return (
        <div className='p-2 rounded shadow-sm h-64 bg-white rounded shadow-sm flex justify-center'>
            <PieChart
                series={[
                    {
                        data: data1,
                        innerRadius: 50,
                        outerRadius: 100,
                        cx:110,
                        highlightScope: { highlight: 'item', fade: 'global' },
                        
                    }
                ]}
                slotProps={{
                    legend: { hidden:true},
                }}
                height={230}
            />
        </div>
    )
}

export default Piecharts