'use client'
import Accordion from '@/components/Site/Accordion/Accordion'
import React, { useEffect } from 'react'

const data = [
    {
        title: 'How does Give.do Fundraisers work?',
        content: 'Give.do Fundraisers is a crowdfunding platform where individuals and nonprofits can start fundraisers and receive one-time donations. To start a fundraiser: You are required to sign up on https://give.do/fundraisers and start a fundraising page, Invite your friends and family to contribute towards your cause Ask them to spread the word by sharing it on social media platforms (such as Facebook, Twitter and WhatsApp) to reach your goal amount. To donate: You can click on the fundraiser you want to support and make a donation to help raise funds. You can also share the campaign on your social media to let your friends and family know about the fundraiser and reach the goal faster.'
    },
    {
        title: 'Is my donation on Give.do Fundraiser secure?',
        content: 'Yes, all online transactions on Give.do Fundraisers are secure. All of our platforms and APIs use TLS encryption with HSTS and Forward Secrecy. Our payment processing partners Razorpay and Stripe have been certified to PCI DSS which is the most stringent level of certification available in the payments industry.'
    },
    {
        title: 'Will my entire donation reach my selected NGO?',
        content: '0% platform fees is charged for all fundraisers/crowdfunding campaigns on Give.do Fundraisers. However, all online donations are subject to a small payment processing fee (~3%) to cover third-party and bank charges and ensure your donations are processed securely by our payment partners.'
    },
    {
        title: 'In what currencies does Give.do accept the donation?',
        content: 'Give.do accepts donation in two currencies- INR and USD. Any other currency is converted into an equivalent amount in USD during the time of the donation.'
    },
    {
        title: 'What is the tax benefit that I will be receiving upon donating to this fundraiser?',
        content: 'Charitable donations to this fundraising campaign are tax exempted under Section 80G of Income Tax Act (India)'
    },

]

type Props = {}

const Questions = (props: Props) => {
    const [selected, setSelected] = React.useState<number | null>(0)
    const [isMounted, setIsMounted] = React.useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        isMounted && <div className='flex flex-col gap-4'>
            {
                data.map((item, index) => (
                    <button  key={index} onClick={() => setSelected(index)}>
                        <div>
                            <Accordion title={item.title} content={item.content} isSelected={selected === index} />
                        </div>
                    </button>
                ))
            }
        </div>
    )
}

export default Questions