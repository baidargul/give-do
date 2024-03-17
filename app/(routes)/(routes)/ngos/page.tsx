import React from 'react'
import Header from '../components/Header/Header'
import PageHeading from '@/components/Site/Headers/PageHeading'
import CausesSection from '../fundraisers/components/Causes/CausesSection'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import BtnShare from '@/components/Site/Buttons/BtnShare'
import NGOSection from './components/NGOSection'
import TopRaisingNGOs from './components/TopRaisingNGOs'
import NGOinCityCard from './components/NGOinCityCard'

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <PageHeading title='Support leading NGOs in India' description='Browse through 3000+ trusted NGO partners and donate to make a difference!' />
            </div>
            <div className='phone:mx-0 tablet:mx-10 laptop:mx-40 mt-10'>
                <div>
                    <div className='flex justify-between items-center mb-10'>
                        <div className='text-[20px] text-site-text-fundraiser_support_description font-semibold'>Explore NGOs in India</div>
                        <div className='flex gap-2 items-center'>
                            <div className='w-full relative'>
                                <Input className='pl-10' placeholder='Search NGOs by Name or Cause' />
                                <Image src={"/other/peek.png"} alt='search' width={25} height={25} className='absolute pointer-events-none top-3 left-2' />
                            </div>
                            <div className='w-[300px]'>
                                <BtnShare caption='More Filters' textSize='text-lg' icon='/other/filter.png' />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <CausesSection />
                </div>
                <div className='flex w-full justify-between items-start mt-10'>
                    <div className='w-[68%]'>
                        <NGOSection />
                    </div>
                    <div className=''>
                        <TopRaisingNGOs />
                    </div>
                </div>

                <div>
                    <div className='text-[20px] font-semibold text-site-text-fundraiser_support_description'>FIND NGOs IN YOUR CITY</div>
                    <div className='grid grid-cols-3 gap-5'>
                        <NGOinCityCard city='Delhi'/>
                        <NGOinCityCard city='Delhi'/>
                        <NGOinCityCard city='Delhi'/>
                        <NGOinCityCard city='Delhi'/>
                        <NGOinCityCard city='Delhi'/>
                        <NGOinCityCard city='Delhi'/>
                        <NGOinCityCard city='Delhi'/>
                        <NGOinCityCard city='Delhi'/>
                        <NGOinCityCard city='Delhi'/>
                        <NGOinCityCard city='Delhi'/>
                        <NGOinCityCard city='Delhi'/>
                        <NGOinCityCard city='Delhi'/>
                        <NGOinCityCard city='Delhi'/>
                        <NGOinCityCard city='Delhi'/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page