import React from 'react'
import {Card, CardBody, Image} from "@heroui/react";

function Anotherpage() {
     const Another = [
   {
      NXe: "./fi_67855.png",
      pax: "Avalanche",

    },{
      NXe: "./fi_106063.png",
      pax: "Avalanche",

    },{
      NXe: "./fi_533057.png",
      pax: "Avalanche",

    },{
      NXe: "./fi_533077.png",
      pax: "Avalanche",

    },{
      NXe: "./fi_1818265.png",
      pax: "Avalanche",

    },{
      NXe: "./fi_2165881.png",
      pax: "Avalanche",

    },{
      NXe: "./fi_2529995.png",
      pax: "Avalanche",

    },{
      NXe: "./fi_3236885.png",
      pax: "Avalanche",

    },{
      NXe: "./fi_3496215.png",
      pax: "Avalanche",

    },{
      NXe: "./fi_3661746.png",
      pax: "Avalanche",

    },{
      NXe: "./fi_3682921.png",
      pax: "Avalanche",

    },{
      NXe: "./fi_3682921.png",
      pax: "Avalanche",

    },{
      NXe: "./fi_6157591.png",
      pax: "Avalanche",

    },{
      NXe: "./fi_8931510.png",
      pax: "Avalanche",

    },
    {
      NXe: "./fi_9502782.png",
      pax: "Avalanche",

    },
    {
      NXe: "./fi_10567288.png",
      pax: "Avalanche",

    },
    {
      NXe: "./photo1.png",
      pax: "Avalanche",

    },
     {
      NXe: "./fi_15330449.png",
      pax: "Avalanche",

    },
  ];
  return (
   <section className='max-w-[753px] w-full mx-auto px-4 md:px-0'>
    {/* header section */}
    <div className='md:mb-8 mb-4 md:mt-10 mt-5'>
        <h1 className='text-2xl font-bold'>Which of these best describes the incident?</h1>
    </div>

    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {Another.map((don, i) => (
        /* eslint-disable no-console */
        <Card key={i} className= 'bg-gray-200 w-[180px] h-[69px] cursor-pointer border-none shadow-sm hover:shadow-xl hover:translate transition-all duration-300 bg-gray-200'>
         <CardBody className="flex flex-row items-center gap-3 p-3">
              <div className="flex-shrink-0">
                <Image
                  src={don.NXe} // Fixed: matches your array key 'NXe'
                  width={25}
                  height={25}
                  alt="icon"
                  className="rounded-none object-contain"
                  style={{ filter: "invert(54%) sepia(91%) saturate(2462%) hue-rotate(345deg) brightness(101%) contrast(91%)" }}
                />
                
              </div>
              <p className="text-sm font-medium text-gray-700">{don.pax}</p>
            </CardBody>
        </Card>
      ))}
    </div>
   </section>
  )
}

export default Anotherpage;