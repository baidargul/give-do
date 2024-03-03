import React from 'react'
import Organiser from './Organiser'

type Props = {}

const OrganiserSection = (props: Props) => {
    return (
        <div>
            <div className="text-[32px] my-2 font-semibold mb-4">Organisers</div>
            <div className='flex justify-between items-center gap-4'>
                <Organiser name='Social Activities Integration' subText='Beneficiary Charity' key={1} />
                <Organiser name='Give' subText='Organiser' key={2} />
            </div>
        </div>
    )
}

export default OrganiserSection