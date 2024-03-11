import MissionCard from '@/components/Site/Cards/Missions/MissionCard'
import React from 'react'

type Props = {}

const Missions = (props: Props) => {
    return (
        <div className='flex justify-center items-center gap-8 mb-20'>
            <div>
                <MissionCard />
            </div>
            <div>
                <MissionCard />
            </div>
            <div>
                <MissionCard />
            </div>
        </div>
    )
}

export default Missions