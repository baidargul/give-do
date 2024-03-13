import BtnShare from '@/components/Site/Buttons/BtnShare'
import React from 'react'

type Props = {}

export const SocialChange = (props: Props) => {
    return (
        <div className='p-12 bg-[#FBEBE2] flex'  style={{ backgroundImage: "url('/other/social.png')", backgroundRepeat: "no-repeat", backgroundPositionX: "right"}}>
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
    )
}