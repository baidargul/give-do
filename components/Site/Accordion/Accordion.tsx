import Image from 'next/image'
import React from 'react'

type Props = {}

const Accordion = (props: Props) => {
    return (
        <div className='bg-site-bg-accordion p-8 rounded-2xl text-site-text-tag_first_donor text-[1.125rem] font-semibold cursor-pointer'>
            <div className='flex justify-between items-center'>
                <div>
                    How does Give.do Fundraisers work?
                </div>
                <div>
                    <Image src={"/other/faq_plusIcon.png"} width={20} height={20} alt='faq' className='opacity-50' />
                </div>
            </div>
        </div>
    )
}

export default Accordion