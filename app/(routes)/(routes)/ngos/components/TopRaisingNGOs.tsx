import Seperator from '@/components/Site/Seperator/Seperator'
import Image from 'next/image'
import React from 'react'
import NGOsmallcard from './NGOsmallcard'
import SelectControl from '@/components/Site/ComboBoxs/SelectControl'

type Props = {}

const TopRaisingNGOs = (props: Props) => {

    const options = [
        "This Week", "This Month"
    ]

    return (
        <div className='bg-[#FAF9F9] p-7 rounded-2xl '>
            <div className='w-full '>
                <div className='flex justify-between items-center gap-2 w-full'>
                    <div className='text-[16px] font-semibold'>Top fundraising NGOs</div>
                    <div className='scale-95'>
                        <SelectControl options={options} />
                    </div>
                </div>
                <div className='my-5'>
                    <Seperator type='horizontal' />
                </div>
                <div className='flex flex-col gap-5'>
                    <NGOsmallcard />
                    <NGOsmallcard />
                    <NGOsmallcard />
                    <NGOsmallcard />
                </div>
            </div>
        </div>
    )
}

export default TopRaisingNGOs