import React from 'react'
import Update from './Update'
import DonateSection from '../DonateSection/Section'

type Props = {}

const UpdateSection = (props: Props) => {
    return (
        <div className='px-4 tablet:px-0'>
            <div className="text-xl tablet:text-[32px] my-2 font-semibold">Updates</div>
            <div className='mb-5 tablet:mb-0'>
                <Update />
            </div>
        </div>
    )
}

export default UpdateSection