import React from 'react'
import Image from 'next/image'

const JobCard = () => {
  return (
    <div className='bg-white p-3 m-20 rounded-3xl text-black grid grid-cols-9'>
      <div className='col-span-1'>
        <div className='bg-gray-200 w-full h-auto rounded-full'>
            
        </div>
      </div>
      <div className='col-span-8 flex flex-col gap-1'>
        <div>
          <h3 className='font-bold'>Social Media Assistant</h3>
          <div>
            <span className='text-xs text-gray-700 mr-2'>Young Men Cristians Association</span>
            <span className='text-xs text-gray-700 mr-2'>● Addis Ababa, Ethiopia</span>
          </div>
        </div>
        <div>
          <p className='text-xs'>
            As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers. Your primary goal will be to enhance brand visibility, foster positive relationships with the audience, and drive engagement and conversions.
          </p>
        </div>
        <div className='flex items-center my-2'>
          <span className='outline rounded-full text-green-600 px-3 mr-2 pb-1 text-xs bg-green-50'>In person</span>
          <span className='text-gray-400 mr-2'>|</span>
          <span className='outline rounded-full text-yellow-600 px-3 mr-2 pb-1 text-xs bg-yellow-50'>Education</span>
          <span className='outline rounded-full text-blue-600 px-3 mr-2 text-xs bg-blue-50'>IT</span>
        </div>
      </div>
    </div>
  )
}

export default JobCard
