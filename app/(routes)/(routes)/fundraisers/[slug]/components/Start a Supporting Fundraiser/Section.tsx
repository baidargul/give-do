import BtnShare from '@/components/Site/Buttons/BtnShare'
import LinkButton from '@/components/Site/Buttons/LinkButton'
import Seperator from '@/components/Site/Seperator/Seperator'
import React from 'react'

type Props = {}

const SupportingFundraiserSection = (props: Props) => {
    return (
        <div className='flex flex-col gap-2 tablet:gap-4'>
            <div className="text-lg tablet:text-[32px] my-4 tablet:my-2 font-semibold mb-4">Start a Supporting Fundraiser</div>
            <div className='text-site-text-fundraiser_support_description text-[1rem]'>Magnify your impact by starting your own fundraiser. All funds raised by you will support the cause and help reach the goal faster.</div>
            <div className='flex-col tablet:flex-row flex items-center gap-3 mt-4'>
                <div className='w-full tablet:w-auto'>
                    <BtnShare caption='Raise Funds Now' />
                </div>
                <div className='hidden tablet:block'>
                    <Seperator type='dotted' />
                </div>
                <div className='hidden tablet:block'>
                    <LinkButton caption='View 4 Supporting Fundraisers' />
                </div>
                <div className='block tablet:hidden'>
                    <button className='text-[1rem] text-site-bg-redHighlight font-semibold hover:underline'>
                        View 4 Supporting Fundraisers
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SupportingFundraiserSection