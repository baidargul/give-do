import React from 'react'
import Questions from './Questions'

type Props = {}

const FAQSection = (props: Props) => {
    return (
        <div className='px-40 pt-2 flex justify-between gap-5'>

            <div className='w-[40%]'>
                <div className="text-[32px] my-2 font-semibold">FAQs</div>
                <div>
                    <div className=''>Everything you need to know about the fundraiser and your donation. Can’t find the answer you are looking for?
                        <span className='text-site-bg-redHighlight underline'> Please chat with our friendly team</span>
                    </div>
                </div>
            </div>

            <div className='w-[60%]'>
                <Questions />
            </div>
        </div>
    )
}

export default FAQSection