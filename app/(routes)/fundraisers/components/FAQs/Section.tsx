import LinkButton from '@/components/Site/Buttons/LinkButton'
import React from 'react'

type Props = {}

const FAQSection = (props: Props) => {
    return (
        <div className='px-40 pt-2'>

            <div className='w-[40%]'>
                <div className="text-[32px] my-2 font-semibold">FAQs</div>
                <div>
                    <div className=''>Everything you need to know about the fundraiser and your donation. Can’t find the answer you are looking for?
                        <span className='text-site-bg-redHighlight hover:underline'> Please chat with our friendly team</span>
                    </div>
                </div>
            </div>

            <div className='w-[60%]'>

            </div>
        </div>
    )
}

export default FAQSection