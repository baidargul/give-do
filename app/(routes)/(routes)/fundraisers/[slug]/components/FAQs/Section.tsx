import React, { Suspense } from 'react'
import Questions from './Questions'

type Props = {}


const FAQSection = (props: Props) => {
    return (
        <div className='tablet:px-40 pt-2 flex flex-col tablet:flex-row justify-between gap-5'>
            <div className='tablet:w-[43%]'>
                <div className="text-lg tablet:text-[32px] my-2 font-semibold">FAQs</div>
                <div>
                    <div className=''>Everything you need to know about the fundraiser and your donation. Can’t find the answer you are looking for?
                        <span className='text-site-bg-redHighlight underline'> Please chat with our friendly team</span>
                    </div>
                </div>
            </div>

            <div className='tablet:w-[60%]'>
                <Questions />
            </div>
        </div>
    )
}

export default FAQSection