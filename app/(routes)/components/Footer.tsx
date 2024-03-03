import React from 'react'
import Link from './Footer/Link'
import LinkTitle from './Footer/LinkTitle'
import Links from './Footer/Links'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='bg-site-bg-footer px-40 pt-8 pb-20 mt-16'>
            <Links />
        </div>
    )
}

export default Footer