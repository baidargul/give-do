'use client'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Image from "next/image"

import React from 'react'

type Links = {
    title: string
    link: string
}

type Props = {
    children: React.ReactNode
    links: Links[]
}

const HomePageNavItem = (props: Props) => {
    return (
        <HoverCard>
            <HoverCardTrigger className="font-semibold text-[18px] text-site-text-tag_first_donor flex gap-1 items-center">
                {props.children}
                <div>
                    <Image src={"/other/dropDown.png"} width={20} height={20} alt="dropdown" />
                </div>
            </HoverCardTrigger>
            <HoverCardContent className="bg-white w-[240px] p-0 rounded-md">
                <div className=" flex flex-col ">
                    {props.links.map((link, index) => {
                        return (
                            <a
                                key={index}
                                href={link.link}
                                className="p-4 bg-white hover:bg-[#FEF8F0] text-site-text-fundraiser_support_description font-semibold text-[16px]"
                            >
                                {link.title}
                            </a>
                        )
                    })}
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}

export default HomePageNavItem


