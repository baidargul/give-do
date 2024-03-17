import AccordionProvider from '@/components/Accordion/AccordionProvider'
import SheetProvider from '@/components/SheetProvider/SheetProvider'
import BtnShare from '@/components/Site/Buttons/BtnShare'
import SiteLogo from '@/components/Site/Logo/SiteLogo'
import HomePageNavItem from '@/components/Site/Menu/HomePageNavItem'
import Seperator from '@/components/Site/Seperator/Seperator'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const forAboutMenu = [
    {
        title: "Our Story",
        link: "#"
    },
    {
        title: "Join Us",
        link: "#",
    },
    {
        title: "Blog",
        link: "#",
    },
    {
        title: "Contact Us",
        link: "#",
    },
]
const forDonorsMenu = [
    {
        title: "Discover fundraisers",
        link: "/fundraisers/"
    },
    {
        title: "Donate to NGOs",
        link: "/ngos/",
    },
    {
        title: "Monthly Missions",
        link: "#",
    },
    {
        title: "Raise funds for your special day",
        link: "#",
    },
]

const HomepageNav = (props: Props) => {
    return (
        <div>
            <div className='hidden tablet:flex justify-between items-center phone:mx-0 tablet:mx-10 laptop:mx-40 mb-2 tablet:mb-5 pt-5 px-4 tablet:px-0'>
                <div className='w-[98.94px] h-[47px]'>
                    <SiteLogo size={100} />
                </div>
                <div className='flex justify-between gap-10 items-center cursor-pointer'>
                    <div>
                        <HomePageNavItem links={forDonorsMenu}>
                            For Donors
                        </HomePageNavItem>
                    </div>
                    <div className='text-[18px] font-semibold text-site-text-tag_first_donor'>
                        CSR
                    </div>
                    <div className='text-[18px] font-semibold text-site-text-tag_first_donor'>
                            Discover NGOs
                    </div>
                    <div className='text-[18px] font-semibold text-site-text-tag_first_donor'>
                        <HomePageNavItem links={forAboutMenu}>
                            About
                        </HomePageNavItem>
                    </div>
                    <div className='flex gap-2 '>
                        <div className='w-[60%]'>
                            <BtnShare caption='Start a fundraiser' textSize='text-lg' />
                        </div>
                        <div className='w-[20%]'>
                            <BtnShare caption='Login' red textSize='text-lg' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex tablet:hidden justify-between items-center p-4 fixed z-[1] bg-white w-full'>
                <SiteLogo size={70} />
                <div>
                    <SheetProvider content={mobileMenu()}>
                        <Image src='/other/menu.png' width={30} height={30} alt='phone-menu' />
                    </SheetProvider>
                </div>
            </div>
        </div >
    )
}

export default HomepageNav

function mobileMenu() {
    return (
        <div className='w-full h-full bg-white p-4 mb-12 flex flex-col justify-between '>
            <div>
                <div className='bg-transparent h-10'></div>
                <AccordionProvider content={createMenu(forDonorsMenu)}>
                    For Donors
                </AccordionProvider>
                <div className='font-medium mt-4'>
                    CSR
                </div>
                <div className='font-medium mt-4'>
                    Discover NGOs
                </div>
                <AccordionProvider content={createMenu(forAboutMenu)}>
                    About
                </AccordionProvider>
            </div>
            <div className=''>
                <div className='my-3'>
                    <Seperator type='horizontal' />
                </div>
                <div className='flex flex-col justify-between gap-2 '>
                    <div className='w-full'>
                        <BtnShare caption='Login' red textSize='text-lg' />
                    </div>
                    <div className='w-full'>
                        <BtnShare caption='Start a fundraiser' textSize='text-lg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

function createMenu(menu: any[]) {
    return (
        <div className='flex flex-col w-full gap-2 p-2 h-fit'>
            {menu.map((item: any) => {
                return (
                    <div className='font-medium text-site-text-fundraiser_support_description' key={item.title}>
                        {item.title}
                    </div>
                )
            })}
        </div>
    )
}