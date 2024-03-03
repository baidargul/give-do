import React from 'react'
import Donor from './Donor'

type Props = {}

const DonorsSection = (props: Props) => {
    return (
        <div className='flex flex-col gap-4'>
            <Donor name='Zainul Abidin' amount={50} type='RECENT DONOR' key={1} />
            <Donor name='Anonymous' amount={1500} type='FIRST DONOR' key={2} />
            <Donor name='Anonymous' amount={56000} type='TOP DONOR' key={3} />
        </div>
    )
}

export default DonorsSection