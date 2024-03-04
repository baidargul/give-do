import React from 'react'
import Links from './Footer/Links'
import Disclaimer from './Footer/Disclaimer'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='bg-site-bg-footer px-4 tablet:px-40 pt-8 pb-24 tablet:pb-26 mt-16'>
            <Links />
            <Disclaimer />
            <div className='w-full h-[1px] bg-site-bg-redHighlight/30'></div>
            <div className='flex justify-between items-center text-[14px] mt-4'>
                <div>© Give</div>
                <div className='flex justify-between gap-10'>
                    <div>Terms</div>
                    <div>Privacy Policy</div>
                </div>
            </div>
        </div>
    )
}

export default Footer