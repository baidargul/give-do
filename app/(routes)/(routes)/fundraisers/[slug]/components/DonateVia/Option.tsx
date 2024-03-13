import Image from 'next/image'
import React from 'react'

type Props = {
    type: "paytm" | "cards" | "banks"
}

const Option = (props: Props) => {

    let description = ''
    let descriptionForPhone = ''
    let sub = ''
    if (props.type === 'paytm') {
        description = 'Google Pay, Paytm and others'
        descriptionForPhone = 'GPay, Paytm, etc.'
        sub = 'Use UPI App'
    } else if (props.type === 'cards') {
        description = 'Credit & Debit Cards'
        descriptionForPhone = 'Credit & Debit Cards'
        sub = 'Pay via Cards'
    } else if (props.type === 'banks') {
        description = 'Internet Banking & Transfer'
        descriptionForPhone = 'Bank Payments'
        sub = 'Transfer'
    }


    return (
        <div>
            {/* {FOR ABOVE TABLET} */}
            <div className='hidden tablet:flex tablet:w-[255.46px] h-[88px] p-[16px] items-center gap-2  rounded-xl border border-slate-200 hover:border-site-redHighlight hover:text-site-redHighlight cursor-pointer transition-all duration-100 bg-white shadow-[0_14px_10px_-15px_rgba(0,0,0,0.1)]'>
                <Image src={`/donate-via/${props.type}.jpg`} alt={props.type} width={50} height={50} />
                <div className='font-medium text-[0.875rem] tablet:text-[1rem]'>{description}</div>
            </div>

            {/* FOR PHONE */}
            <div className='block tablet:hidden'>
                <div className='flex w-[111.46px] h-[113.2px] p-[8px] flex-col items-start gap-2  rounded-t-xl border border-slate-200 cursor-pointer transition-all duration-100 bg-white'>
                    <Image src={`/donate-via/${props.type}.jpg`} alt={props.type} width={50} height={50} />
                    <div className='font-medium text-sm tablet:text-[1rem]'>{descriptionForPhone}</div>
                </div>
                <div className='bg-site-redHighlight/5 text-site-redHighlight rounded-b-xl w-full h-8 text-center p-1 text-xs font-medium flex justify-center items-center'>
                    {sub}
                </div>
            </div>
        </div>
    )
}

export default Option