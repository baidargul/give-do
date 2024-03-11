import MissionCard from '@/components/Site/Cards/Missions/MissionCard'
import React from 'react'

type Props = {}


const missions = [
    {
        title: "Every Girl in School",
        entity: "girls",
        supported: 598,
        left: 2735, 
        supporters: 122,
        image: "1",
    },
    {
        title: "No Child Orphaned",
        entity: "orphans",
        supported: 1899,
        left: 2101, 
        supporters: 1262,
        image: "2",
    },
    {
        title: "Protect Abandoned Elders",
        entity: "elders",
        supported: 352,
        left: 1648, 
        supporters: 122,
        image: "3",
    },
]

const Missions = (props: Props) => {
    return (
        <div className='flex justify-center items-center gap-8'>
            {
                missions.map((mission, index) => (
                    <MissionCard key={index} mission={mission} />
                ))
            }
        
        </div>
    )
}

export default Missions