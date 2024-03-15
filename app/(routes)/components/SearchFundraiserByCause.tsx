import Link from 'next/link'
import React from 'react'

type Props = {}

const data = [
    {
        id: 1,
        title: 'Poverty',
        link: '#'
    },
    {
        id: 2,
        title: 'Children',
        link: '#'
    },
    {
        id: 3,
        title: 'Arts & Culture',
        link: '#'
    },
    {
        id: 4,
        title: 'Differently Abled',
        link: '#'
    },
    {
        id: 3,
        title: 'Arts & Culture',
        link: '#'
    },
    {
        id: 4,
        title: 'Differently Abled',
        link: '#'
    },
    {
        id: 3,
        title: 'Arts & Culture',
        link: '#'
    },
    {
        id: 4,
        title: 'Differently Abled',
        link: '#'
    },
]

const SearchFundraiserByCause = (props: Props) => {
    return (
        <div>
            <div className='text-[1.5rem] tablet:text-[24px] font-semibold mb-2'>
                Search fundraisers by cause
            </div>
            <div className='tablet:flex tablet:flex-row grid grid-cols-2 gap-2 tablet:gap-0 justify-between  items-center'>
                {
                    data.map((item) => (
                        <Link href={item.link} key={item.id} className='text-site-text-fundraiser_support_description underline text-[16px]'>
                            {item.title}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchFundraiserByCause