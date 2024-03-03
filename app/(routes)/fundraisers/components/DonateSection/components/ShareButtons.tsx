import BtnShare from '@/components/Site/Buttons/BtnShare'
import React from 'react'

type Props = {}

const ShareButtons = (props: Props) => {
    return (
        <div className='w-full flex flex-col gap-4'>
            <BtnShare />
            <BtnShare />
            <div className='text-center text-site-text-fundraiser_support_description text-sm'>
                299 shares! Every share counts.
            </div>
        </div>
    )
}

export default ShareButtons