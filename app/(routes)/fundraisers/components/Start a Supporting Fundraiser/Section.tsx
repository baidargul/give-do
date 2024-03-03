import BtnShare from '@/components/Site/Buttons/BtnShare'
import LinkButton from '@/components/Site/Buttons/LinkButton'
import Seperator from '@/components/Site/Seperator/Seperator'
import React from 'react'

type Props = {}

const SupportingFundraiserSection = (props: Props) => {
    return (
        <div>
            <div className="text-[32px] my-2 font-semibold mb-4">Start a Supporting Fundraiser</div>
            <div className='text-site-text-fundraiser_support_description text-[1rem]'>Magnify your impact by starting your own fundraiser. All funds raised by you will support the cause and help reach the goal faster.</div>
            <div className='flex items-center gap-3 mt-4'>
                <BtnShare caption='Raise Funds Now' />
                <Seperator type='dotted' />
                <LinkButton caption='View 4 Supporting Fundraisers' />
            </div>
        </div>
    )
}

export default SupportingFundraiserSection