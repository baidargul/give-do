import React from 'react'

type Props = {}

const Grid = (props: Props) => {
    return (
        <div className='relative mt-[300px]'>
            <div className='flex justify-center'>
                <div className='grid grid-cols-4 justify-items-center w-fit shadow-[0_0_6px_rgba(0,0,0,.12)] gap-16 p-5 relative z-0'>
                    <div>
                        <div className='text-[40px] font-semibold'>2.7M+</div>
                        <div className='font-medium text-site-text-fundraiser_support_description'>Donors</div>
                    </div>
                    <div>
                        <div className='text-[40px] font-semibold'>15M+</div>
                        <div className='font-medium text-site-text-fundraiser_support_description'>Lives Impacted</div>
                    </div>
                    <div>
                        <div className='text-[40px] font-semibold'>3000+</div>
                        <div className='font-medium text-site-text-fundraiser_support_description'>Verified Non Profits</div>
                    </div>
                    <div>
                        <div className='text-[40px] font-semibold'>300+</div>
                        <div className='font-medium text-site-text-fundraiser_support_description'>Corporate Partners</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid