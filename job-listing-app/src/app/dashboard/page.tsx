import React, { useEffect, useState } from 'react'
import { Dot,CheckCircle2, PlusCircleIcon, MapPin, Calendar, CalendarCheck, FlameIcon } from 'lucide-react'
import axios from 'axios'
import { useParams } from 'next/navigation';

const Dashboard = () => {
    const [detal, setDetail] = useState({});

    const { id } = useParams();

    useEffect(()=>{
        axios.get(`https://akil-backend.onrender.com/opportunities/${id}`)
        .then(res => {
            console.log(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])

    return (
        <div className='flex bg-white text-black h-screen px-20'>
            <div className='col-span-3 p-5'>
                <div className='my-3 py-3'>
                    <h2 className='font-bold mb-1 text-2xl'>Description</h2>
                    <p className='text-xs'>
                        As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers. Your primary goal will be to enhance brand visibility, foster positive relationships with the audience, and drive engagement and conversions.
                    </p>
                </div>

                <div className='my-3 py-3'>
                    <h2 className='font-bold mb-1 text-2xl'>Responsiblities</h2>
                    <ul className='text-xs'>
                        <li className=''><CheckCircle2 className='text-green-500 inline-block size-4 mr-1'/>Community engagement to ensure that is supported and actively represented onlin</li>
                        <li className=''><CheckCircle2 className='text-green-500 inline-block size-4 mr-1'/>Focus on social media content development and publication</li>
                        <li className=''><CheckCircle2 className='text-green-500 inline-block size-4 mr-1'/>Marketing and strategy support</li>
                        <li className=''><CheckCircle2 className='text-green-500 inline-block size-4 mr-1'/>Stay on top of trends on social media platforms, and suggest content ideas to the team</li>
                        <li className=''><CheckCircle2 className='text-green-500 inline-block size-4 mr-1'/>Engage with online communities</li>
                    </ul>
                </div>

                <div className='my-3 py-3'>
                    <h1 className='font-bold mb-1 text-2xl'>Ideal Candidate we want</h1>
                    <ul className='text-xs'>
                        <li><Dot className='inline relative'/><span className='font-bold'>Young(18-24 year old) Female social media manager</span></li>
                        <li><Dot className='inline relative'/><span className=' font-bold'>Passionate & Reliable:</span> Genuine interest in our mission and a strong desire to make a positive impact, responsible, and committed to fulfilling volunteer commitments.</li>
                        <li><Dot className='inline'/><span className='font-bold'>Adaptable, Team Player & Strong Communication Skills:</span> Able to work effectively in diverse teams; and contributes positively. Flexible and open to embracing new challenges and shifting priorities; Clear verbal and written communication, active listening, and constructive feedback.</li>
                        <li><Dot className='inline'/><span className='font-bold'>Respectful:</span> Embraces diversity, inclusive, and treats others with respect. Abides with all our rules and regulations</li>
                    </ul>
                </div>

                <div className='my-3 py-3'>
                    <h2 className='font-bold mb-1 text-2xl'>When & Where</h2>
                    <div className='flex'>
                        <MapPin className='text-blue-500 size-4 mr-1'/>
                        <p className='text-sm'>The onboarding event for this event will take place in jan 18th, 2023 in AAU Auditorium</p>
                    </div>
                    
                </div>
            </div>

            <div className='my-3 py-3 mx-4 w-200'>
                <div className='border-b border-gray-300 pb-4'>
                    <h2 className='font-bold mb-1 text-xl'>About</h2>
                    <div className='flex my-1'>
                        <div className='flex items-center justify-center border border-gray-200 w-10 h-10 rounded-full'>
                            <PlusCircleIcon className='text-blue-500'/>
                        </div>
                        <div className='ml-4'>
                            <span className='block text-xs text-gray-600 '>Posted On</span>
                            <span className='text-xs font-semibold'>Jul 1,2023</span>
                        </div>
                    </div>
                    
                    <div className='flex my-1'>
                        <div className='flex items-center justify-center border border-gray-200 w-10 h-10 rounded-full'>
                            <FlameIcon className='text-blue-500'/>
                        </div>
                        <div className='ml-4'>
                            <span className='block text-xs text-gray-600'>Deadline</span>
                            <span className='text-xs font-semibold'>Jul 31,2023</span>
                        </div>
                    </div>
                    
                    <div className='flex my-1'>
                        <div className='flex items-center justify-center border border-gray-200 w-10 h-10 rounded-full'>
                            <MapPin className='text-blue-500'/>
                        </div>
                        <div className='ml-4'>
                            <span className='block text-xs text-gray-00'>Location</span>
                            <span className='text-xs font-semibold'>Addis Ababa</span>
                        </div>
                    </div>
                    
                    <div className='flex my-1'>
                        <div className='flex items-center justify-center border border-gray-200 w-10 h-10 rounded-full'>
                            <Calendar className='text-blue-500'/>
                        </div>
                        <div className='ml-4'>
                            <span className='block text-xs text-gray-600'>Start Date</span>
                            <span className='text-xs font-semibold'>Aug 02,2023</span>
                        </div>
                    </div>
                    
                    <div className='flex my-1'>
                        <div className='flex items-center justify-center border border-gray-200 w-10 h-10 rounded-full'>
                            <CalendarCheck className='text-blue-500'/>
                        </div>
                        <div className='ml-4'>
                            <span className='block text-xs text-gray-600'>End Date</span>
                            <span className='text-xs font-semibold'>Sep 02,2023</span>
                        </div>
                    </div>
                    
                </div>
                <div className='py-4 border-b border-gray-300'>
                    <h2 className='font-bold text-xl'>Categories</h2>
                    <div className='flex gap-3'>
                        <span className='text-xs text-yellow-700 rounded-full bg-yellow-200 px-3'>Marketing</span>
                        <span className='text-xs text-green-700 rounded-full bg-green-200 px-3'>Design</span>
                    </div>
                </div>

                <div className='my-3'>
                    <h2 className='font-bold pb-3 text-xl'>Required Skills</h2>
                    <div className='text-xs'>
                        <span className='bg-gray-300 inline-block rounded-full m-1 px-2'>Social Media Management</span>
                        <span className='bg-gray-300 inline-block rounded-full m-1 px-2'>English</span>
                        <span className='bg-gray-300 inline-block rounded-full m-1 px-2'>Copywriting</span>
                    </div>
                    
                </div>
            </div>
        </div>
  )
}

export default Dashboard
