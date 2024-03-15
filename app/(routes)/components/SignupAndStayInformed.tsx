import BtnShare from '@/components/Site/Buttons/BtnShare'
import { Input } from '@/components/ui/input'
import React from 'react'

type Props = {}

const SignupAndStayInformed = (props: Props) => {
    return (
        <div className="bg-white p-4 tablet:p-8 rounded-2xl drop-shadow-md tablet:grid tablet:grid-cols-2">
            <div className="">
                <div className="text-[1.5rem] tablet:text-[32px] font-semibold">Sign Up, Stay Informed</div>
                <div className="text-[.9rem] mt-2 tablet:mt-0 tablet:text-[16px] text-site-text-fundraiser_support_description">Get regular updates on all that we are doing to change lives</div>
            </div>
            <div className='flex flex-col mt-4 tablet:mt-0 tablet:flex-row gap-4 p-4 justify-end items-center'>
                <div className='w-full'>
                    <Input placeholder='Enter you Email ID' />
                </div>
                <div className='w-full'>
                    <BtnShare red caption='Subscribe' textSize='text-lg' />
                </div>
            </div>
        </div>
    )
}

export default SignupAndStayInformed