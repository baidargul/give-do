import FundRaiserCard from '@/components/Site/Cards/Fundraisers/FundRaiserCard'
import React from 'react'

type Props = {}

const SupportFundraisersSection = (props: Props) => {
    return (
        <div>
            <div className='text-[40px] font-semibold text-site-text-tag_top_donor'>
                Support a fundraiser
            </div>
            <div className='text-[20px] text-site-text-fundraiser_support_description'>
                Pick a cause close to your heart and donate now
            </div>
            <div className='grid grid-cols-3 my-8 gap-10 w-full'>
                <FundRaiserCard />
                <FundRaiserCard />
                <FundRaiserCard />
                <FundRaiserCard />
                <FundRaiserCard />
                <FundRaiserCard />
            </div>
        </div>
    )
}

export default SupportFundraisersSection