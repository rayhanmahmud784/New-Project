import React from 'react'
import {Textarea} from "@heroui/react";

function Another1() {
  return (
   <section className='max-w-[753px] w-full mx-auto px-4 md:px-0'>
    <div className='md:mb-8 mb-4 md:mt-10 mt-5'>
        <h1 className='text-2xl font-bold'>Let’s give the incident a title?</h1>
        <p className="text-lg font-medium text-gray-500">Make a title that will easily identify the incidents</p>
         <Textarea
      isRequired
      className="max-w-full h-[47px] border border-gray-400 rounded-xl md:mt-5 mt-2"
      labelPlacement="outside"
      placeholder="Add title here"
       variant="faded"
    />
      <div className='md:mb-8 mb-4 md:mt-10 mt-5 '>
         <h1 className='text-2xl font-bold'>Describe what happened during the incident?</h1>
         <p className="text-lg font-medium text-gray-500">Share some information about the incident. The when, where, how. </p>
         
          <Textarea
      className="max-w-full h-[127px] border border-gray-400 rounded-xl md:mt-5 mt-2"
      placeholder="Type here"
      variant="faded"
      
    />
    </div>
    </div>    
   </section>
  )
}

export default Another1;