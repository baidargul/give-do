import BtnShare from '@/components/Site/Buttons/BtnShare'
import React from 'react'

type Props = {}

const SupportSection = (props: Props) => {
    return (
        <div className='bg-site-section-bg-support_section py-10 px-6 tablet:p-6 rounded-xl tablet:rounded-lg'>
            <div className='tablet:flex justify-between items-center'>
                <div>
                    <div className='text-lg font-medium tablet:font-normal'>Support the fundraiser</div>
                    <div className='text-site-text-fundraiser_support_description'>Every small share & donation counts</div>
                </div>
                <div className='tablet:flex tablet:gap-3'>
                    <div className='mt-3 tablet:mt-0'>
                        <BtnShare red caption='Give Now' />
                    </div>
                    <div className='mt-3 tablet:mt-0'>
                        <BtnShare />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportSection