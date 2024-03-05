import CurrencySelector from '@/components/Site/ComboBoxs/CurrencySelector'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className='flex justify-between items-center phone:mx-0 tablet:mx-10 laptop:mx-40 mb-2 tablet:mb-5 p-4 px-6 h-[74px] tablet:px-0 py-2'>
            <div>
                <Image src={"/logo.png"} width={92.63} height={44} className='w-[92.63px] h-[44px]' alt='site-logo' />
            </div>
            <div className='flex justify-between gap-4 items-center'>
                <div className='hidden tablet:block'>Find Fundraisers</div>
                <div className='hidden tablet:block'><CurrencySelector /></div>
                <div>
                    <Image src={"/profiles/default.jpg"} width={40} height={40} className='w-[40px] h-[40px] rounded-full' alt='user' />
                </div>
            </div>
        </div>
    )
}

export default Header