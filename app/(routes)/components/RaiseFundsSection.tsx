import BtnShare from '@/components/Site/Buttons/BtnShare'
import Image from 'next/image'
import React from 'react'

type Props = {}

const RaiseFundsSection = (props: Props) => {
    return (
        <div>
            {/** for phone */}
            <div className='block tablet:hidden'>
                <div className='h-[600px] bg-[#FBEBE6] rounded-2xl tablet:p-10 tablet:h-[330px] tablet:border}' style={{ backgroundImage: "url(/homepage/raisefunds.png)", backgroundRepeat: "no-repeat", backgroundPosition: "bottom", overflow: "clip", backgroundSize: "350px", backgroundPositionX: "bottom", backgroundPositionY: "380px" }}>
                    <div className='flex flex-col tablet:grid tablet:grid-cols-2}'>
                        <div className='px-10 tablet:px-0 pt-10 tablet:pt-0'>
                            <div className='text-[1.5rem] text-center tablet:text-left tablet:text-[40px] font-semibold text-site-text-tag_top_donor'>
                                Raise funds for your cause!
                            </div>
                            <div className='text-[.8rem] text-center tablet:text-left tablet:text-[20px] text-site-text-fundraiser_support_description mb-16'>
                                Onboard on Give.do and create impact by raising funds for your initiatives
                            </div>
                            <div className='flex flex-col gap-2 tablet:flex-row w-full tablet:gap-5'>
                                <div className='w-full'>
                                    <BtnShare caption='Enroll your NGO on Give.do' textSize='text-[1rem]' red />
                                </div>
                                <div className='w-full'>
                                    <BtnShare caption='Raise funds for a listed NGO' textSize='text-[1rem]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>

            {/** for tablet */}
            <div className='hidden tablet:block'>
                <div className='bg-[#FBEBE6] tablet:p-10 tablet:h-[330px] tablet:border' style={{ backgroundImage: "url(/homepage/raisefunds.png)", backgroundRepeat: "no-repeat", backgroundPosition: "right", overflow: "clip", backgroundSize: "550px", backgroundPositionX: "right", backgroundPositionY: "3px" }}>
                    <div className='flex flex-col tablet:{grid grid-cols-2}'>
                        <div className='tablet:w-[50%]'>
                            <div className='text-[1.5rem] text-center tablet:text-left tablet:text-[40px] font-semibold text-site-text-tag_top_donor'>
                                Raise funds for your cause!
                            </div>
                            <div className='text-[.8rem] text-center tablet:text-left tablet:text-[20px] text-site-text-fundraiser_support_description mb-16'>
                                Onboard on Give.do and create impact by raising funds for your initiatives
                            </div>
                            <div className='flex flex-col gap-2 tablet:flex-row w-full tablet:gap-5'>
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
            </div>
        </div>
    )
}

export default RaiseFundsSection