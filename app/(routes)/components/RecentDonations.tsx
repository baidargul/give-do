import Image from 'next/image'
import React from 'react'

type Props = {}

const donations = [
    { name: 'John Doe', amount: "₹100" },
    { name: 'Jane Doe', amount: "₹50" },
    { name: 'John Smith', amount: "$200" },
    { name: 'Jane Smith', amount: "₹75" },
]


const RecentDonations = (props: Props) => {
    return (
        <div className='bg-site-redHighlight/5 py-[20px] flex justify-center items-center'>
            <marquee>
                <div className='flex gap-1'>
                    {
                        donations.map((donation, index) => (
                            <div key={index} className='flex gap-1 items-center'>
                                <div className='flex gap-1 text-[1rem] tablet:text-[24px]'>
                                    <div>
                                        {donation.name} donated
                                    </div>
                                    <div className='font-semibold text-site-redHighlight'>
                                        {donation.amount}
                                    </div>
                                </div>
                                <div className='mx-8'>
                                    <Image src={"/other/sterik.png"} width={20} height={20} alt={"sterik logo"} className='' />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </marquee>
        </div>
    )
}

export default RecentDonations