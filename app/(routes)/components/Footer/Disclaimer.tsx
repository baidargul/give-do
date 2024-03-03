import React from 'react'

type Props = {}

const Disclaimer = (props: Props) => {
    return (
        <div className='text-xs flex flex-col gap-4 p-[24px] bg-site-bg-disclaimer rounded-2xl my-10'>
            <div className='font-semibold'>Disclaimer</div>
            <div className='text-site-text-fundraiser_support_description text-[12px]'>
                Use of children’s information including images, videos, testimonials, etc. in the Campaign is necessary for creating awareness about the charitable cause in order to bring traction to the said charitable cause and obtain donations which can then be used for charitable activities. Information is used and processed with valid consent. This statement is issued in compliance with the Consumer Protection Act, 2019, as amended from time to time.
            </div>
        </div>
    )
}

export default Disclaimer