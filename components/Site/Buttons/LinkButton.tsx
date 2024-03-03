import React from 'react'

type Props = {
    caption?: string
}

const LinkButton = (props: Props) => {
  return (
    <div>
        <button className='text-sm text-site-bg-redHighlight font-semibold hover:underline'>
            {props.caption? props.caption: "View All Donors"}
        </button>
    </div>
  )
}

export default LinkButton