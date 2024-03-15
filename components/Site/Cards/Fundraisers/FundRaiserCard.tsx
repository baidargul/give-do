import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import React from 'react'
import BtnShare from '../../Buttons/BtnShare'
import Link from 'next/link'

type Props = {
    urgent?: boolean
}

const FundRaiserCard = (props: Props) => {


    return (
        <Link href={"/fundraisers/template-page/"} className='rounded-2xl relative w-auto tablet:h-[559.6px] group cursor-pointer tablet:hover:scale-105 transition-all drop-shadow-md bg-white'>
            <div className='w-full'>
                <Image src={"/homepage/missions/1.jpg"} width={384} height={300} alt={"fundraiser"} className='rounded-t-2xl h-[300px] w-full object-cover' />
            </div>
            <div className='p-7'>
                <div className='text-[20px] font-semibold line-clamp-2 text-site-text-tag_top_donor'>Help Vinay bring children facing abuse in red-light areas to safety and protect them</div>
                <div className='text-site-text-fundraiser_support_description text-[16px]'>by Social Activities Integration</div>
                <div className='flex justify-between items-center mt-3 mb-2'>
                    <div className='flex gap-1 p-1 text-[14px] text-site-text-fundraiser_support_description items-center bg-site-text-fundraiser_support_description/5 w-fit'>
                        <div><Image src={"/other/people.png"} width={16} height={16} alt='supporters' /></div>
                        <div>1055</div>
                        <div>Supporters</div>
                    </div>
                    <div className='flex gap-1 p-1 text-[.8rem] tablet:text-[14px] text-site-text-fundraiser_support_description items-center bg-site-text-fundraiser_support_description/5 w-fit'>
                        <div><Image src={"/other/watchGrey.png"} width={16} height={16} alt='supporters' /></div>
                        <div>9</div>
                        <div>Days Left</div>
                    </div>
                </div>
                <div className='mb-2 tablet:group-hover:opacity-0'>
                    <Progress value={20} />
                </div>
                <div className='flex justify-between items-center tablet:group-hover:hidden'>
                    <div>
                        <div className='text-[20px] font-medium'>₹2,00,000</div>
                    </div>
                    <div className='text-site-text-fundraiser_support_description text-[.8rem] tablet:text-[1rem]'>
                        Raised of ₹10,00,000 goal
                    </div>
                </div>
                {
                props.urgent && (
                    <div className='tablet:hidden mt-4  w-full bg-gradient-to-r from-site-redHighlight/20 p-2 px-4 text-site-redHighlight to-transparent font-semibold flex gap-1 items-center'>
                        <div>
                            <Image src={"/other/warningRed.png"} width={20} height={20} alt='urgent' />
                        </div>
                        <div className='font-normal'>Urgent Need of Funds</div>
                    </div>
                )
            }
                <div className='tablet:hidden tablet:group-hover:block mt-5 tablet:mt-0'>
                    <BtnShare red caption='Donate Now' />
                </div>
            </div>
            {
                props.urgent && (
                    <div className='hidden absolute bottom-0 group-hover:hidden w-full bg-gradient-to-r from-site-redHighlight/20 p-2 px-4 text-site-redHighlight to-transparent font-semibold rounded-b-2xl tablet:flex gap-1 items-center'>
                        <div>
                            <Image src={"/other/warningRed.png"} width={20} height={20} alt='urgent' />
                        </div>
                        <div>Urgent Need of Funds</div>
                    </div>
                )
            }
        </Link>
    )
}

export default FundRaiserCard