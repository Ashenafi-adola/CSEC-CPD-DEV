'use client'
import React, { useEffect, useState } from 'react'
import JobCard from '@/components/JobCard'
import axios from 'axios'

const Opportunities = () => {
  const [opportunities, setOpportunities] = useState([])

  useEffect(()=>{
    axios.get("https://akil-backend.onrender.com/opportunities/search")
    .then(res=>{
      console.log(res.data);
    })
    .catch(error=>{
      console.log(error)
    })
  })
  return (
    <div className='bg-white text-black px-20'>
      <div className='flex justify-between m-5 p-5 items-center'>
        <div>
            <h1 className='font-bold text-3xl'>Opportunities</h1>
            <span className='text-gray-500 text-xs'>Showing 73 results</span>
        </div>
        <div>
            <span className='text-gray-500'>Sort by: </span>
            <select name="" id="" className='border-r border-gray-400 px-4'>
                <option value="">Most relevant</option>
                <option value="">Most relevant</option>
                <option value="">Most relevant</option>
            </select>
        </div>
      </div>
      <div>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
      </div>
    </div>
  )
}

export default Opportunities
