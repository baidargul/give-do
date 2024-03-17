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
import GivesDoMission from './components/GivesDoMission'
import FAQSection from '@/components/Site/FAQ/FAQSection'
import Footer from '../components/Footer'

type Props = {}

const questions = [
    {
        title: 'What is an NGO?',
        content: 'An NGO, or non-governmental organisation, is a non-profit entity independent of government control, formed by individuals or groups driven by a shared purpose to address social, environmental or humanitarian issues. NGOs operate on various scales, from grassroots community organisations to large international bodies. Their activities encompass diverse sectors, including healthcare, education, human rights and environmental conservation. NGOs play a pivotal role in bridging gaps, advocating for marginalised communities and fostering positive social change. Typically relying on donations, grants and volunteer support, NGOs aim to enhance the well-being of society, fill gaps in public services and champion causes to provide the solutions to problems that individuals and communities face.'
    },
    {
        title: 'What is the work of an NGO?',
        content: 'NGOs engage in a broad spectrum of work aimed at addressing societal issues and promoting positive change. Their activities encompass diverse sectors including healthcare, education, poverty alleviation, human rights, anti-trafficking, environmental conservation, disaster relief and much more. NGOs often provide essential services such as medical care, educational programs and rescue and rehabilitation, to name a few. NGOs also play a crucial role in advocacy, raising awareness about social issues and influencing policy changes. Additionally, NGOs may undertake research, collaborate with communities and implement sustainable development projects. Through their multifaceted efforts, NGOs contribute to building a more equitable, just, and sustainable world, often focusing on areas where existing resources may be limited or insufficient.'
    },
    {
        title: 'What is the full form of an NGO?',
        content: 'The acronym NGO stands for non-governmental organisation. NGOs are private, non-profit entities independent of government control, formed by individuals or groups with a shared mission to address various social, humanitarian or environmental issues. These organisations operate at local, national and international levels, working towards positive societal change. NGOs play a crucial role in providing essential services, advocating for marginalised communities and contributing to sustainable development. The diverse nature of NGOs reflects their commitment to fostering a more equitable and compassionate world beyond existing frameworks.'
    },
]

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
                <div className='flex w-full gap-10 justify-between items-start mt-10'>
                    <div className='w-[70%]'>
                        <NGOSection />
                    </div>
                    <div className='w-[35%]'>
                        <TopRaisingNGOs />
                    </div>
                </div>

                <div>
                    <div className='text-[20px] font-semibold text-site-text-fundraiser_support_description'>FIND NGOs IN YOUR CITY</div>
                    <div className='grid grid-cols-3 gap-5 mb-28'>
                        <NGOinCityCard city='Delhi' />
                        <NGOinCityCard city='Delhi' />
                        <NGOinCityCard city='Delhi' />
                        <NGOinCityCard city='Delhi' />
                        <NGOinCityCard city='Delhi' />
                        <NGOinCityCard city='Delhi' />
                        <NGOinCityCard city='Delhi' />
                        <NGOinCityCard city='Delhi' />
                        <NGOinCityCard city='Delhi' />
                        <NGOinCityCard city='Delhi' />
                        <NGOinCityCard city='Delhi' />
                        <NGOinCityCard city='Delhi' />
                        <NGOinCityCard city='Delhi' />
                        <NGOinCityCard city='Delhi' />
                    </div>
                </div>
            </div>
            <div className='bg-[#FAF9F9] py-10'>
                <div className='phone:mx-0 tablet:mx-10 laptop:mx-40 mt-10'>
                    <div>
                        <GivesDoMission />
                    </div>
                    <div className='mt-28'>
                        <FAQSection questions={questions} title='Everything you need to know about the product and billing. Can’t find the answer you’re looking for?' redLine=' Please chat with our team.' />
                    </div>
                </div>
            </div>
            <div className='-mt-16'>
                <Footer />
            </div>

        </div>
    )
}

export default page