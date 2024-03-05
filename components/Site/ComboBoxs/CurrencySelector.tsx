'use client'
import React from 'react'

type Props = {}

const CurrencySelector = (props: Props) => {

  return (
    <div>
        <select className='bg-white appearance-none'>
            <option className='bg-white hover:bg-white focus:bg-white appearance-none'>INR</option>
            <option className='bg-white hover:bg-white focus:bg-white appearance-none'>USD</option>
        </select>
    </div>
  )
}

export default CurrencySelector