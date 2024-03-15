import FundRaiserCard from '@/components/Site/Cards/Fundraisers/FundRaiserCard'
import React from 'react'

type Props = {}

const SupportFundraisersSection = (props: Props) => {
    return (
        <div>
            <div className='text-[1.5rem] tablet:text-[40px] font-semibold text-site-text-tag_top_donor'>
                Support a fundraiser
            </div>
            <div className='text-[.9rem] mt-2 tablet:mt-0 tablet:text-[20px] text-site-text-fundraiser_support_description'>
                Pick a cause close to your heart and donate now
            </div>
            <div className='flex flex-col gap-10 mt-10 tablet:mt-8 tablet:grid tablet:grid-cols-3 tablet:my-8 tablet:gap-10 w-full'>
                <FundRaiserCard />
                <FundRaiserCard urgent />
                <FundRaiserCard />
                <FundRaiserCard />
                <FundRaiserCard />
                <FundRaiserCard />
            </div>
        </div>
    )
}

export default SupportFundraisersSection