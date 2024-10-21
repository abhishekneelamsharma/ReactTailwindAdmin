import React from 'react'
import Analytics from '../scenes/analytics/Analytics'
import Barcharts from '../scenes/charts/Barcharts'
import Piecharts from '../scenes/charts/Piecharts'
import Steps from '../scenes/stepper/Steps'
import Faq from '../scenes/accordion/Faq'



const Dashboard = () => {
    return (
        <>
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Analytics />
                <Barcharts />
                <div className='flex flex-col gap-4 h-64'>
                    <Piecharts />
                    <Steps />
                </div>
                <Faq />
            </div>
        </>
    )
}

export default Dashboard