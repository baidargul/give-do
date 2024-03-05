import React from 'react'
import LinkTitle from './LinkTitle'
import Link from './Link'
import CurrencySelector from '@/components/Site/ComboBoxs/CurrencySelector'

type Props = {}

const Links = (props: Props) => {
    return (
        <div className='grid grid-row-2 grid-cols-2 gap-x-10 gap-y-8 tablet:grid-cols-5 tablet:gap-y-0 tablet:gap-x-0 w-full justify-between'>
            <div className='flex flex-col gap-2 tablet:gap-4'>
                <LinkTitle name='About Us' />
                <Link name='About Give' />
                <Link name='Blog' />
                <Link name='Careers' />
                <Link name='Contact us' />
            </div>
            <div className='flex flex-col gap-2 tablet:gap-4'>
                <LinkTitle name='Fundraiser Support' />
                <Link name='FAQs' />
                <Link name='Reach out' />
            </div>
            <div className='flex flex-col gap-2 tablet:gap-4'>
                <LinkTitle name='Start a Fundraiser for' />
                <Link name='NGO' />
            </div>
            <div className='flex flex-col gap-2 tablet:gap-4'>
                <LinkTitle name='Donate to' />
                <Link name='Social Causes' />
                <Link name='NGOs' />
            </div>
            <div className='flex flex-col gap-2 tablet:gap-4'>
                <div><CurrencySelector /></div>
                <div>Social Media Icons</div>
            </div>
        </div>
    )
}

export default Links