import React from 'react'
import Donor from './Donor'
import BtnShare from '@/components/Site/Buttons/BtnShare'
import Seperator from '@/components/Site/Seperator/Seperator'
import LinkButton from '@/components/Site/Buttons/LinkButton'

type Props = {}

const DonorsSection = (props: Props) => {
    return (
        <div>
            <div className='flex flex-col gap-4'>
                <Donor name='Zainul Abidin' amount={50} type='RECENT DONOR' key={1} />
                <Donor name='Anonymous' amount={1500} type='FIRST DONOR' key={2} />
                <Donor name='Anonymous' amount={56000} type='TOP DONOR' key={3} />
            </div>

            <div className='w-fit mt-8 flex justify-between items-center gap-3'>
                <BtnShare caption='View Top Donors' />
                <Seperator type='dotted' />
                <LinkButton/>
            </div>

        </div>
    )
}

export default DonorsSection