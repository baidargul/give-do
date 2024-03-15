'use client'
import * as React from "react"
import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { type CarouselApi } from "@/components/ui/carousel"


const images = [
  {
    url: "",
    alt: "Image 1",
    image: "/homepage/coursel/1",
  },
  {
    url: "",
    alt: "Image 2",
    image: "/homepage/coursel/2",
  },
  {
    url: "",
    alt: "Image 3",
    image: "/homepage/coursel/3",
  },
  {
    url: "",
    alt: "Image 4",
    image: "/homepage/coursel/4",
  },
  {
    url: "",
    alt: "Image 5",
    image: "/homepage/coursel/5",
  },
  {
    url: "",
    alt: "Image 6",
    image: "/homepage/coursel/6",
  },
]

export function HomepageCoursel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })

    setCount(api.scrollSnapList().length);
  }, [api]);


  const handleClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  }

  useEffect(() => {
    console.log(current)
  }, [current])

  return (
    <div>
      <div className="hidden tablet:block relative">
        <Carousel className="w-full" opts={{ loop: true, align: "start" }} plugins={[Autoplay({ delay: 5000, }),]} setApi={setApi}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="w-full cursor-pointer select-none" onClick={() => { }}>
                  <Image src={`${image.image}.jpg`} alt={image.alt} width={1466} height={490} className="w-full select-none pointer-events-none" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>


          <div className="absolute bottom-3 w-full">
            <div className="flex justify-center items-center">

              <div className={`grid grid-cols-6 w-fit gap-4  justify-center items-center justify-items-center `}>
                {
                  images.map((_, index) => {
                    const thisSlide = index + 1;
                    return (
                      <div className={`${current.toString() === thisSlide.toString() && "bg-red-500"} bg-site-text-fundraiser_support_description w-[32px] h-[7px] cursor-pointer hover:bg-site-redHighlight/90`} key={index} onClick={() => { handleClick(index) }} >
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>

        </Carousel>
      </div>
      <div className="block relative tablet:hidden">
        <Carousel className="w-full" opts={{ loop: true, align: "start" }} plugins={[Autoplay({ delay: 5000, }),]} setApi={setApi}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="w-full cursor-pointer select-none" onClick={() => { }}>
                  <Image src={`${image.image}m.jpg`} alt={image.alt} width={1466} height={490} className="w-full select-none pointer-events-none" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-3 w-full">
            <div className="flex justify-center items-center">

              <div className={`grid grid-cols-6 w-fit gap-4  justify-center items-center justify-items-center `}>
                {
                  images.map((_, index) => {
                    const thisSlide = index + 1;
                    return (
                      <div className={`${current.toString() === thisSlide.toString() && "bg-red-500"} bg-site-text-fundraiser_support_description w-[32px] h-[7px] cursor-pointer hover:bg-site-redHighlight/90`} key={index} onClick={() => { handleClick(index) }} >
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}
