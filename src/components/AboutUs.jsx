import React from 'react'
import Image from 'next/image'
const AboutUs = () => {
  return (
      <>
          <div className='bg-black'>
              <div className='flex items-center max-w-[1140px] gap-10 mx-auto px-4 py-20 max-md:py-10 max-md:flex-wrap-reverse'>
                  <div className='w-1/2 max-md:w-full'>
                      <Image src='/assets/images/jpeg/hero-bg-four.jpg' alt='about-img' width={500} height={400} className='w-full max-md:h-full max-w-[500px] h-[500px] pointer-events-none border border-white rounded-2xl'/>
                  </div>
                  <div className='w-1/2 max-md:w-full'>
                      <h2 className='text-3xl text-white font-medium'>About US</h2>
                      <ul className='list-inside '>
                          <li className='text-lg font-medium pt-2 text-white'>1 Here About Our Team Frontend</li>
                          <li className='text-lg font-medium pt-2 text-white'>2 Here About Our Team Backend</li>
                          <li className='text-lg font-medium pt-2 text-white'>3 Here About Our Team Design</li>
                          <li className='text-lg font-medium pt-2 text-white'>4 Here About Our Team FullStack</li>
                      </ul>
                  </div>
              </div>
          </div>
      </>
  )
}

export default AboutUs