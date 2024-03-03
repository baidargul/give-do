'use client'
import Image from 'next/image'
import React, { useState } from 'react'

type Props = {}

const Accordion = (props: Props) => {
    const [isToggled, setIsToggled] = useState(false)
    const [togglePadding, setTogglePadding] = useState(false)

    const handleToggle = () => {
        setIsToggled(!isToggled)

        if (isToggled) {
            setTogglePadding(false)
        } else {
            setTimeout(() => {
                setTogglePadding(true)
            }, 300)
        }
    }

    return (
        <div className='bg-site-bg-accordion p-8 rounded-2xl text-site-text-tag_first_donor text-[1.125rem] font-semibold cursor-pointer'>
            <div onClick={handleToggle} className='flex justify-between items-center'>
                <div>
                    How does Give.do Fundraisers work?
                </div>
                <div>
                    <Image src={isToggled ? "/other/faq_minusIcon.png" : "/other/faq_plusIcon.png"} width={20} height={20} alt='faq' className='opacity-50' />
                </div>
            </div>
            <div className={`transition-all duration-500 pt-0 h-0 overflow-hidden ${isToggled ? 'h-auto' : 'h-0'} ${togglePadding && "pt-0"}`}>
                <p className={`text-sm leading-relaxed font-normal pt-4 ${togglePadding && "pt-0"} transition-all duration-500`}>
                    Yes, all online transactions on Give.do Fundraisers are secure. All of our platforms and APIs use TLS encryption with HSTS and Forward Secrecy. Our payment processing partners Razorpay and Stripe have been certified to PCI DSS which is the most stringent level of certification available in the payments industry.
                </p>
            </div>

        </div>
    )
}

export default Accordion