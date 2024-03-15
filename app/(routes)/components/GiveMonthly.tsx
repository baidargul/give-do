import FadeInOutProvider from '@/components/FadeInOut/FadeInOutProvider'
import Image from 'next/image'
import React from 'react'

type Props = {}

const data = [
    {
        title: 'Real Change',
        description: 'Your choice to give monthly will make a long-lasting impact'
    },
    {
        title: 'Regular updates',
        description: 'Learn how you are changing lives through our reports'
    },
    {
        title: 'Trusted giving',
        description: 'Every beneficiary you support is under the care of GiveAssured nonprofits'
    }
]

const GiveMonthly = (props: Props) => {

    const final:any = []
    data.map((item, index) => {
        final.push(
            <div key={index} className='flex gap-2 mb-4'>
                <Image src={"/other/checkGreen.png"} width={20} height={20} alt='check' className='h-[20px] w-[20px] mt-1' />
                <div className='flex flex-col gap-1'>
                    <span className='text-[20px] font-semibold text-site-text-tag_top_donor '>{item.title}</span>
                    <p className='text-site-text-fundraiser_support_description text-[16px]'>{item.description}</p>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="mt-10 tablet:mt-24 mb-14 flex flex-col justify-start tablet:justify-center tablet:items-center gap-2">
                <div className="text-[1.5rem] tablet:text-[48px] font-semibold text-site-text-tag_first_donor">
                    Give Monthly
                </div>
                <div className="text-[1rem] tablet:text-[20px] text-site-text-fundraiser_support_description">
                    Sign up once and invest in India’s future every month
                </div>
            </div>
            <div className='hidden tablet:flex justify-center items-center mb-10'>
                <div className='w-[32%] border-y p-[24px]'>
                    <div className='flex gap-2 '>
                        <Image src={"/other/checkGreen.png"} width={20} height={20} alt='check' className='h-[20px] w-[20px] mt-1' />
                        <div className='flex flex-col gap-1'>
                            <span className='text-[20px] font-semibold text-site-text-tag_top_donor '>Real Change</span>
                            <p className='text-site-text-fundraiser_support_description text-[16px]'>Your choice to give monthly will make a long-lasting impact</p>
                        </div>
                    </div>
                </div>
                <div className='w-[32%] border p-[24px]'>
                    <div className='flex gap-2 '>
                        <Image src={"/other/checkGreen.png"} width={20} height={20} alt='check' className='h-[20px] w-[20px] mt-1' />
                        <div className='flex flex-col gap-1'>
                            <span className='text-[20px] font-semibold text-site-text-tag_top_donor '>Regular updates</span>
                            <p className='text-site-text-fundraiser_support_description text-[16px]'>Learn how you are changing lives through our reports</p>
                        </div>
                    </div>
                </div>
                <div className='w-[32%] border-y p-[24px]'>
                    <div className='flex gap-2 '>
                        <Image src={"/other/checkGreen.png"} width={20} height={20} alt='check' className='h-[20px] w-[20px] mt-1' />
                        <div className='flex flex-col gap-1'>
                            <span className='text-[20px] font-semibold text-site-text-tag_top_donor '>Trusted giving</span>
                            <p className='text-site-text-fundraiser_support_description text-[16px]'>Every beneficiary you support is under the care of GiveAssured nonprofits</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='block tablet:hidden border-y p-1 pb-0 pt-2 -mt-5 mb-5'>
                <FadeInOutProvider content={final} itemsToShow={1} delay={2000} />
            </div>
        </div>
    )
}

export default GiveMonthly