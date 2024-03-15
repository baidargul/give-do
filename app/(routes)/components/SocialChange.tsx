import BtnShare from '@/components/Site/Buttons/BtnShare'
import React from 'react'

type Props = {}

export const SocialChange = (props: Props) => {
    return (
        <div>
            {/**for phone */}
            <div className='flex tablet:hidden -mt-20 flex-col tablet:flex-row p-12 h-[600px] tablet:h-auto rounded-2xl tablet:rounded-none bg-[#FBEBE2]' style={{ backgroundImage: "url('/other/social.png')", backgroundRepeat: "no-repeat" , backgroundPosition: "bottom", backgroundSize: "380px" }}>
                <div className=''>
                    <div>
                        <div className='text-[1.5rem] tablet:text-[40px] text-center tablet:text-left font-semibold text-site-text-tag_top_donor'>
                            Get involved in social change in India
                        </div>
                        <div className='text-[.9rem] tablet:text-[1.25rem] text-center tablet:text-left text-site-text-fundraiser_support_description'>
                            Discover and donate to fundraisers or start your own
                        </div>
                    </div>
                    <div className='flex flex-col tablet:flex-row gap-4 mt-8 w-full tablet:w-[80%]'>
                        <div className='w-full'>
                            <BtnShare red caption='Start a Fundraiser' />
                        </div>
                        <div className='w-full'>
                            <BtnShare caption='Donate to a Fundraiser' />
                        </div>
                    </div>
                </div>
                <div className='hidden tablet:w-[61%]'>

                </div>
            </div>
            {/**for tablet */}
            <div className='hidden tablet:flex p-12 bg-[#FBEBE2]' style={{ backgroundImage: "url('/other/social.png')", backgroundRepeat: "no-repeat", backgroundPositionX: "right" }}>
                <div className=''>
                    <div>
                        <div className='text-[40px] font-semibold text-site-text-tag_top_donor'>
                            Get involved in social change in India
                        </div>
                        <div className='text-[1.25rem] text-site-text-fundraiser_support_description'>
                            Discover and donate to fundraisers or start your own
                        </div>
                    </div>
                    <div className='flex gap-4 mt-8 w-[80%]'>
                        <div className='w-full'>
                            <BtnShare red caption='Start a Fundraiser' />
                        </div>
                        <div className='w-full'>
                            <BtnShare caption='Donate to a Fundraiser' />
                        </div>
                    </div>
                </div>
                <div className='w-[61%]'>

                </div>
            </div>
        </div>
    )
}