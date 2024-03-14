'use client'
import BtnShare from '@/components/Site/Buttons/BtnShare'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'
import CausesSection from './Causes/CausesSection'
import FundRaiserCard from '@/components/Site/Cards/Fundraisers/FundRaiserCard'

type Props = {}

const cards = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21
]


const Filters = (props: Props) => {
    return (
        <div>
            <div className='flex justify-between items-center phone:mx-0 tablet:mx-10 laptop:mx-40'>
                <div className='text-[20px] text-site-text-fundraiser_support_description font-semibold'>EXPLORE CAUSES</div>
                <div className='flex gap-2 items-center'>
                    <div className='w-full relative'>
                        <Input className='pl-10' placeholder='Search NGO or fundraiser' />
                        <Image src={"/other/peek.png"} alt='search' width={25} height={25} className='absolute pointer-events-none top-3 left-2' />
                    </div>
                    <div className='w-[300px]'>
                        <BtnShare caption='More Filters' textSize='text-lg' icon='/other/filter.png' />
                    </div>
                </div>
            </div>
            <div className='phone:mx-0 tablet:mx-10 laptop:mx-40 mt-10'>
                <CausesSection />
            </div>
            <div className='phone:mx-0 tablet:mx-10 laptop:mx-40 mt-10'>
                <div className='grid grid-cols-3 w-full gap-10 justify-items-center'>
                    {
                        cards.map((card, index) => {
                            return <FundRaiserCard key={index} />
                        })
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Filters