import React from 'react'
import AmountLog from './components/AmountLog'
import DonationNotification from './components/DonationNotification'
import BtnShare from '@/components/Site/Buttons/BtnShare'
import ShareButtons from './components/ShareButtons'

type Props = {}

const DonateSection = (props: Props) => {
    return (
        <div className='p-[32px] border drop-shadow-lg bg-white rounded-2xl w-full'>
            <div>
                <AmountLog />
            </div>
            <div>
                <DonationNotification />
            </div>
            <div>
                <ShareButtons />
            </div>
            
        </div>
    )
}

export default DonateSection