import React from 'react'
import Link from './Footer/Link'
import LinkTitle from './Footer/LinkTitle'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='bg-site-bg-footer px-40 pt-8 pb-20 mt-16'>
            <div className='grid grid-cols-5 w-full justify-between'>
                <div className='flex flex-col gap-4'>
                    <LinkTitle name='About Us' />
                    <Link name='About Give' />
                    <Link name='Blog' />
                    <Link name='Careers' />
                    <Link name='Contact us' />
                </div>
                <div className='flex flex-col gap-4'>
                    <LinkTitle name='Fundraiser Support' />
                    <Link name='FAQs' />
                    <Link name='Reach out' />
                </div>
                <div className='flex flex-col gap-4'>
                    <LinkTitle name='Start a Fundraiser for' />
                    <Link name='NGO' />
                </div>
                <div className='flex flex-col gap-4'>
                    <LinkTitle name='Donate to' />
                    <Link name='Social Causes' />
                    <Link name='NGOs' />
                </div>
                <div>Currency</div>
            </div>
        </div>
    )
}

export default Footer