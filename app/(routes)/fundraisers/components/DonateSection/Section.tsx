'use client'
import React, { use, useEffect, useRef, useState } from 'react'
import AmountLog from './components/AmountLog'
import DonationNotification from './components/DonationNotification'
import ShareButtons from './components/ShareButtons'
import DonorsSection from './components/Donors/DonorsSection'
import Story from '../Story/Story'
import BtnShare from '@/components/Site/Buttons/BtnShare'

type Props = {}

const DonateSection = (props: Props) => {
    const giveNowButton: any = useRef()
    const [giveNowButtonVisibility, setGiveNowButtonVisibility] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setGiveNowButtonVisibility(entry.isIntersecting)
        })
        observer.observe(giveNowButton.current)
    }, [])

    return (
        <div className={`tablet:sticky tablet:top-12`}>
            <div className={`bg-white p-3 w-full bottom-0 left-0 fixed z-[200] ${giveNowButtonVisibility && "hidden"} tablet:hidden`} style={{ boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.16)" }}>
                <BtnShare caption='Give Now' red />
            </div>
            <div className='p-4 tablet:p-[32px]  tablet:border tablet:drop-shadow-lg bg-white tablet:rounded-2xl'>
                <div>
                    <AmountLog />
                </div>
                <div>
                    <DonationNotification />
                </div>
                <div>
                    <ShareButtons giveNowRef={giveNowButton} />
                </div>
                <div className='block tablet:hidden'>
                    <Story />
                </div>
                <div className='my-4 hidden tablet:block'>
                    <DonorsSection />
                </div>
            </div>
        </div>
    )
}

export default DonateSection