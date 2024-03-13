import BtnShare from '@/components/Site/Buttons/BtnShare'
import { Input } from '@/components/ui/input'
import React from 'react'

type Props = {}

const SignupAndStayInformed = (props: Props) => {
    return (
        <div className="bg-white p-8 rounded-2xl drop-shadow-md grid grid-cols-2">
            <div className="">
                <div className="text-[32px] font-semibold">Sign Up, Stay Informed</div>
                <div className="text-[16px] text-site-text-fundraiser_support_description">Get regular updates on all that we are doing to change lives</div>
            </div>
            <div className='flex gap-4 p-4 justify-end items-center'>
                <div className='w-full'>
                    <Input placeholder='Enter you Email ID' />
                </div>
                <div>
                    <BtnShare red caption='Subscribe' textSize='text-lg' />
                </div>
            </div>
        </div>
    )
}

export default SignupAndStayInformed