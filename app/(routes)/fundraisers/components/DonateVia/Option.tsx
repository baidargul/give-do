import Image from 'next/image'
import React from 'react'

type Props = {
    type: "paytm" | "cards" | "banks"
}

const Option = (props: Props) => {

    let description = ''
    if (props.type === 'paytm') {
        description = 'Google Pay, Paytm and others'
    } else if (props.type === 'cards') {
        description = 'Credit & Debit Cards'
    } else if (props.type === 'banks') {
        description = 'Internet Banking & Transfer'
    }


    return (
        <div>
            <div className='w-[255.46px] h-[88px] p-[16px] flex items-center gap-2  rounded-xl border border-slate-200 hover:border-site-redHighlight hover:text-site-redHighlight cursor-pointer transition-all duration-100 bg-white shadow-[0_14px_10px_-15px_rgba(0,0,0,0.1)]'>
                <Image src={`/donate-via/${props.type}.jpg`} alt={props.type} width={50} height={50} />
                <div className='font-medium text-[1rem]'>{description}</div>
            </div>
        </div>
    )
}

export default Option