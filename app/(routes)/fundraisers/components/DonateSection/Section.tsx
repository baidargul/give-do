import React from 'react'
import AmountLog from './components/AmountLog'
import DonationNotification from './components/DonationNotification'
import ShareButtons from './components/ShareButtons'
import DonorsSection from './components/Donors/DonorsSection'
import Story from '../Story/Story'

type Props = {}

const DonateSection = (props: Props) => {
    return (
        <div className='p-[32px] sticky top-12 border drop-shadow-lg bg-white rounded-2xl'>
            <div>
                <AmountLog />
            </div>
            <div>
                {/* <DonationNotification /> */}
            </div>
            <div>
                <ShareButtons />
            </div>
            <div className='block tablet:hidden'>
                <Story />
            </div>
            <div className='my-4'>
                <DonorsSection />
            </div>
        </div>
    )
}

export default DonateSection