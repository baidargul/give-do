import CurrencySelector from '@/components/Site/ComboBoxs/CurrencySelector'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className='flex justify-between phone:mx-0 tablet:mx-10 laptop:mx-40 mb-5 py-2'>
            <div>
                <Image src={"/logo.png"} width={92.63} height={44} className='w-[92.63px] h-[44px]' alt='site-logo' />
            </div>
            <div className='flex justify-between gap-4 items-center'>
                <div>Find Fundraisers</div>
                <div><CurrencySelector /></div>
                <div>Account</div>
            </div>
        </div>
    )
}

export default Header