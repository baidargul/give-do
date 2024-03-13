import React from 'react'

type Props = {}

const ChangeMaker = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center text-center bg-[#F8F1F1] p-28'>
        <div className='text-[48px] font-semibold'>Hello, Changemaker!</div>
        <div className='text-site-text-fundraiser_support_description font-semibold text-[20px]'>Ready to make an impact? Browse through 10,000+ fundraisers and donate to make a difference!</div>
    </div>
  )
}

export default ChangeMaker