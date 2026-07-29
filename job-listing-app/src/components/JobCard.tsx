import React from 'react'
import Image from 'next/image'

const JobCard = () => {
  return (
    <div className='bg-white p-3 m-10 rounded-3xl text-black flex shadow'>
      <div className='w-20'>
        <div className='bg-gray-200 w-15 h-15 rounded-full'>
            
        </div>
      </div>
      <div className='flex flex-col gap-1 ml-1'>
        <div className='border-b border-gray-400'>
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
        <div className='flex items-center my-2 font-semibold'>
          <span className=' rounded-full text-green-600 px-3 mr-2 py-1 text-xs bg-green-100 '>In person</span>
          <span className='text-gray-400 mr-2 text-2xl my-0'>|</span>
          <span className='outline rounded-full text-yellow-600 px-3 mr-2 py-1 text-xs bg-yellow-50'>Education</span>
          <span className='outline rounded-full text-purple-900 px-5 mr-2 py-1 text-xs bg-blue-50'>IT</span>
        </div>
      </div>
    </div>
  )
}

export default JobCard
