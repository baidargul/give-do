import Seperator from '@/components/Site/Seperator/Seperator'
import Image from 'next/image'
import React from 'react'
import NGOsmallcard from './NGOsmallcard'

type Props = {}

const TopRaisingNGOs = (props: Props) => {
    return (
        <div className='bg-[#FAF9F9] p-10 rounded-2xl '>
            <div className='w-full '>
                <div className='flex justify-between'>
                    <div>Top fundraising NGOs</div>
                    <div>This week</div>
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