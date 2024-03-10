'use client'
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

const images = [
  {
    url: "",
    alt: "Image 1",
    image: "/homepage/coursel/1.jpg",
  },
  {
    url: "",
    alt: "Image 2",
    image: "/homepage/coursel/2.jpg",
  },
  {
    url: "",
    alt: "Image 3",
    image: "/homepage/coursel/3.jpg",
  },
  {
    url: "",
    alt: "Image 4",
    image: "/homepage/coursel/4.jpg",
  },
  {
    url: "",
    alt: "Image 5",
    image: "/homepage/coursel/5.jpg",
  },
  {
    url: "",
    alt: "Image 6",
    image: "/homepage/coursel/6.jpg",
  },
]

export function HomepageCoursel() {

  return (
    <div className="relative">
      <Carousel className="w-full" opts={{ loop: true, align: "start" }} plugins={[Autoplay({ delay: 2000, }),]}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="w-full cursor-pointer select-none" onClick={() => { }}>
                <Image src={image.image} alt={image.alt} width={1466} height={490} className="w-full select-none pointer-events-none" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>


        <div className="absolute bottom-3 w-full">
          <div className="flex justify-center items-center">

            <div className={`grid grid-cols-6 w-fit gap-4  justify-center items-center justify-items-center `}>
              {
                images.map((image, index) => {

                  return (
                    <div className="bg-site-text-fundraiser_support_description w-[32px] h-[5px] " key={index}>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

      </Carousel>
    </div>
  )
}
