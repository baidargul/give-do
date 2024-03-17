import React from 'react'
import NGO from './NGO'
import Seperator from '@/components/Site/Seperator/Seperator'

type Props = {}


const ngos = [
    {
        title: "Team Everest",
        description: "Team Everest started its journey in August 2006 when founder Karthee Vidya completed graduation and joined his first job. He donated from his first-month salary and collected funds from 3 of his friends to raise Rs 4000 to help children in a rural school in Tamilnadu. We used the funds to buy books and uniforms for the school kids there.",
        location: "Chennai, Tamil Nadu, India",
        raised: "₹22.7 Cr+ raised",
        supporters: "43.2 K+ Supporters",
        image: "1.jpg",
    },
    {
        title: "IAF India Animal Foundation",
        description: "We are a collective of passionate leaders taking strategic actions to end all forms of animal harm.",
        location: "Chennai, Tamil Nadu, India",
        raised: "₹22.7 Cr+ raised",
        supporters: "43.2 K+ Supporters",
        image: "2.jpg",
    },
    {
        title: "Team Everest",
        description: "Team Everest started its journey in August 2006 when founder Karthee Vidya completed graduation and joined his first job. He donated from his first-month salary and collected funds from 3 of his friends to raise Rs 4000 to help children in a rural school in Tamilnadu. We used the funds to buy books and uniforms for the school kids there.",
        location: "Chennai, Tamil Nadu, India",
        raised: "₹22.7 Cr+ raised",
        supporters: "43.2 K+ Supporters",
        image: "3.jpg",
    },
    {
        title: "Team Everest",
        description: "Team Everest started its journey in August 2006 when founder Karthee Vidya completed graduation and joined his first job. He donated from his first-month salary and collected funds from 3 of his friends to raise Rs 4000 to help children in a rural school in Tamilnadu. We used the funds to buy books and uniforms for the school kids there.",
        location: "Chennai, Tamil Nadu, India",
        raised: "₹22.7 Cr+ raised",
        supporters: "43.2 K+ Supporters",
        image: "1.jpg",
    },
    {
        title: "IAF India Animal Foundation",
        description: "We are a collective of passionate leaders taking strategic actions to end all forms of animal harm.",
        location: "Chennai, Tamil Nadu, India",
        raised: "₹22.7 Cr+ raised",
        supporters: "43.2 K+ Supporters",
        image: "2.jpg",
    },
    {
        title: "Team Everest",
        description: "Team Everest started its journey in August 2006 when founder Karthee Vidya completed graduation and joined his first job. He donated from his first-month salary and collected funds from 3 of his friends to raise Rs 4000 to help children in a rural school in Tamilnadu. We used the funds to buy books and uniforms for the school kids there.",
        location: "Chennai, Tamil Nadu, India",
        raised: "₹22.7 Cr+ raised",
        supporters: "43.2 K+ Supporters",
        image: "3.jpg",
    },
]

const NGOSection = (props: Props) => {
    return (
        <div>
            {
                ngos.map((ngo, index) => {
                    return (
                        <div key={index} className=''>
                            <div className='w-fit'>
                                <NGO title={ngo.title} description={ngo.description} image={ngo.image} location={ngo.location} raised={ngo.raised} supporters={ngo.supporters} />
                            </div>
                            <div className='my-10 w-fit'>
                                <Seperator type='horizontal' />
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default NGOSection