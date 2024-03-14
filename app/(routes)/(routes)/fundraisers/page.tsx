import React from 'react'
import ChangeMaker from './components/ChangeMaker'
import { Input } from '@/components/ui/input'
import BtnShare from '@/components/Site/Buttons/BtnShare'
import Image from 'next/image'
import Filters from './components/Filters'

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <div className='mb-10'>
                <ChangeMaker />
            </div>
            <div>
                <Filters />
            </div>
        </div>
    )
}

export default page