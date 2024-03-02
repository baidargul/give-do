import BtnShare from '@/components/Site/Buttons/BtnShare'
import React from 'react'

type Props = {}

const SupportSection = (props: Props) => {
    return (
        <div className='bg-site-section-bg-support_section p-6 rounded-lg'>
            <div className='flex justify-between items-center'>
                <div>
                    <div className='text-lg'>Support the fundraiser</div>
                    <div className='text-site-text-fundraiser_support_description'>Every small share & donation counts</div>
                </div>
                <div className='flex gap-3'>
                    <BtnShare />
                    <BtnShare />
                </div>
            </div>
        </div>
    )
}

export default SupportSection