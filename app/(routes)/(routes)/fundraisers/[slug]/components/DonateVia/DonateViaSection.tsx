import Image from 'next/image'
import React from 'react'
import Option from './Option'

type Props = {}

const DonateViaSection = (props: Props) => {
    return (
        <div>
            <div className='text-lg  font-semibold mt-5'>Donate Via</div>
            <div className='flex justify-between gap-3 w-full my-5'>
                <div key={1}>
                    <Option type='paytm' />
                </div>
                <div key={2}>
                    <Option type='cards' />
                </div>
                <div key={3}>
                    <Option type='banks' />
                </div>
            </div>
        </div>
    )
}

export default DonateViaSection