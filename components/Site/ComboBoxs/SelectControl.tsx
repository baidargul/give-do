"use client"

import { useEffect, useState } from "react"
// const currencies = [
//   "INR(₹)", "USD($)"
// ]

type Props = {
  setValue?: any
  options: string[]
}

export default function SelectControl(props: Props) {
  const [isMounted, setIsMounted] = useState(false)
  const [selectedOption, setSelectedOption] = useState(props.options[0])
  const [triggerDropDown, setTriggerDropDown] = useState(false)

  const SelectClick = () => {
    setTriggerDropDown(!triggerDropDown)
  }

  const setOption = (currency: string) => {
    setSelectedOption(currency)
    setTriggerDropDown(false)
    if (props.setValue) {
      props.setValue(currency)
    }
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    isMounted && <div className="relative">
      <div onClick={SelectClick} className="border border-slate-300 p-2 truncate px-4 w-full h-fit flex justify-evenly cursor-pointer bg-white items-center rounded-lg">
        <div className="text-site-text-tag_first_donor">
          {selectedOption ? selectedOption : null}
        </div>
        <div>
          <svg className="MuiSvgIcon-root w-6 h-6" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
        </div>
      </div>

      {
        triggerDropDown ? (
          <div className="absolute shadow-[0_8px_32px_rgba(0,0,0,.1)] flex flex-col justify-center items-center top-14 right-0 z-10 bg-white w-full h-[100px] rounded-lg border">
            {
              props.options.map((option, index) => {
                return (
                  <div key={index} onClick={() => setOption(option)} className={`px-4 py-2 cursor-pointer w-full text-[14px] font-sans font-semibold hover:text-site-redHighlight hover:bg-site-bg-currencyDropDownHover ${option === selectedOption && "text-site-redHighlight"}`}>
                    {option}
                  </div>
                )
              })
            }
          </div>
        ) : null
      }

    </div>
  )

}
