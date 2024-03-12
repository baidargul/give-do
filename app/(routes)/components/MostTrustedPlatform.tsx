import SiteLogo from '@/components/Site/Logo/SiteLogo'
import React from 'react'
import Title from './mostTrustedPlatform/Title'
import Grid from './mostTrustedPlatform/Grid'

type Props = {}

const MostTrustedPlatform = (props: Props) => {
    return (
        <div className='relative'>
            <Title />
            <Grid />
        </div>
    )
}

export default MostTrustedPlatform