import BtnShare from '@/components/Site/Buttons/BtnShare'
import Image from 'next/image'
import React from 'react'

type Props = {}

const RaiseFundsSection = (props: Props) => {
    return (
        <div className='bg-[#FBEBE6] p-10 h-[330px] border' style={{ backgroundImage: "url(/homepage/raisefunds.png)", backgroundRepeat: "no-repeat", backgroundPosition: "right", overflow: "clip", backgroundSize: "550px", backgroundPositionX: "right", backgroundPositionY: "3px" }}>
            <div className='grid grid-cols-2'>
                <div>
                    <div className='text-[40px] font-semibold text-site-text-tag_top_donor'>
                        Raise funds for your cause!
                    </div>
                    <div className='text-[20px] text-site-text-fundraiser_support_description mb-16'>
                        Onboard on Give.do and create impact by raising funds for your initiatives
                    </div>
                    <div className='flex w-full gap-5'>
                        <div className='w-full'>
                            <BtnShare caption='Enroll your NGO on Give.do' textSize='text-lg' red />
                        </div>
                        <div className='w-full'>
                            <BtnShare caption='Raise funds for a listed NGO' textSize='text-lg' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RaiseFundsSection