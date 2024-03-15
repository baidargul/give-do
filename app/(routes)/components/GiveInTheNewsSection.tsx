import GiveInTheNewsSectionCoursel from '@/components/Site/Carousel/Homepage/GiveInTheNewsSection/GiveInTheNewsSectionCoursel'
import React from 'react'

type Props = {}

const GiveInTheNewsSection = (props: Props) => {
    return (
        <div className='pt-20'>
            <div className='text-[1.5rem] tablet:text-[40px] font-semibold text-site-text-tag_top_donor'>
                <span className='text-site-redHighlight font-bold'>give</span> in the News
            </div>
            <div className='text-[.9rem] mt-2 tablet:mt-0 tablet:text-[20px] text-site-text-fundraiser_support_description mb-16'>
                Some stories in the media featuring Give
            </div>
            <div className=''>
                <GiveInTheNewsSectionCoursel/>
            </div>
        </div>
    )
}

export default GiveInTheNewsSection