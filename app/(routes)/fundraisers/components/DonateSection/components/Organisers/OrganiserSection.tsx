import React from 'react'
import Organiser from './Organiser'

type Props = {}

const OrganiserSection = (props: Props) => {
    return (
        <div>
            <div className="text-lg tablet:text-[32px] my-2 font-semibold mb-4">Organisers</div>
            <div className='tablet:flex justify-between items-center gap-4'>
                <div key={1} className='mt-4'>
                    <Organiser name='Social Activities Integration' subText='Beneficiary Charity' />
                </div>
                <div key={2} className='mt-4'>
                    <Organiser name='Give' subText='Organiser' />
                </div>
            </div>
        </div>
    )
}

export default OrganiserSection