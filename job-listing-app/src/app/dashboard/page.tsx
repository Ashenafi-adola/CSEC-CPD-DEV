import React from 'react'


const Dashboard = () => {
  return (
    <div>
      <div className='flex bg-white text-black m-10'>
        <div className='col-span-3 p-5'>
            <div className='my-3 py-3'>
                <h2 className='font-bold mb-1'>Description</h2>
                <p className='text-xs'>
                    As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers. Your primary goal will be to enhance brand visibility, foster positive relationships with the audience, and drive engagement and conversions.
                </p>
            </div>

            <div className='my-3 py-3'>
                <h2 className='font-bold mb-1'>Responsiblities</h2>
                <ul className='text-xs'>
                    <li>Community engagement to ensure that is supported and actively represented onlin</li>
                    <li>Focus on social media content development and publication</li>
                    <li>Marketing and strategy support</li>
                    <li>Stay on top of trends on social media platforms, and suggest content ideas to the team</li>
                    <li>Engage with online communities</li>
                </ul>
            </div>

            <div className='my-3 py-3'>
                <h1 className='font-bold mb-1'>Ideal Candidate we want</h1>
                <ul className='text-xs'>
                    <li><span className='font-bold'>Young(18-24 year old) Female social media manager</span></li>
                    <li><span className='font-bold'>Passionate & Reliable:</span> Genuine interest in our mission and a strong desire to make a positive impact, responsible, and committed to fulfilling volunteer commitments.</li>
                    <li><span className='font-bold'>Adaptable, Team Player & Strong Communication Skills:</span> Able to work effectively in diverse teams; and contributes positively. Flexible and open to embracing new challenges and shifting priorities; Clear verbal and written communication, active listening, and constructive feedback.</li>
                    <li><span className='font-bold'>Respectful:</span> Embraces diversity, inclusive, and treats others with respect. Abides with all our rules and regulations</li>
                </ul>
            </div>

            <div className='my-3 py-3'>
                <h2 className='font-bold mb-1'>When & Where</h2>
                <p className='text-xs'>The onboarding event for this event will take place in jan 18th, 2023 in AAU Auditorium</p>
            </div>
        </div>

        <div className='my-3 py-3 mx-4 w-200'>
            <div className='border-b border-gray-300 pb-4'>
                <h2 className='font-bold mb-1'>About</h2>
                <div className='flex my-1'>
                    <div className='bg-gray-200 w-10 h-10 rounded-full'>

                    </div>
                    <div className='ml-4'>
                        <span className='block text-xs text-gray-600 '>Posted On</span>
                        <span className='text-xs font-semibold'>Jul 1,2023</span>
                    </div>
                </div>
                
                <div className='flex my-1'>
                    <div className='bg-gray-200 w-10 h-10 rounded-full'>

                    </div>
                    <div className='ml-4'>
                        <span className='block text-xs text-gray-600'>Deadline</span>
                        <span className='text-xs font-semibold'>Jul 31,2023</span>
                    </div>
                </div>
                
                <div className='flex my-1'>
                    <div className='bg-gray-200 w-10 h-10 rounded-full'>

                    </div>
                    <div className='ml-4'>
                        <span className='block text-xs text-gray-00'>Location</span>
                        <span className='text-xs font-semibold'>Addis Ababa</span>
                    </div>
                </div>
                
                <div className='flex my-1'>
                    <div className='bg-gray-200 w-10 h-10 rounded-full'>

                    </div>
                    <div className='ml-4'>
                        <span className='block text-xs text-gray-600'>Start Date</span>
                        <span className='text-xs font-semibold'>Aug 02,2023</span>
                    </div>
                </div>
                
                <div className='flex my-1'>
                    <div className='bg-gray-200 w-10 h-10 rounded-full'>

                    </div>
                    <div className='ml-4'>
                        <span className='block text-xs text-gray-600'>End Date</span>
                        <span className='text-xs font-semibold'>Sep 02,2023</span>
                    </div>
                </div>
                
            </div>
            <div className='py-4 border-b border-gray-300'>
                <h2 className='font-bold'>Categories</h2>
                <div className='flex gap-3'>
                    <span className='text-xs text-yellow-700 rounded-full bg-yellow-200 px-3'>Marketing</span>
                    <span className='text-xs text-green-700 rounded-full bg-green-200 px-3'>Design</span>
                </div>
            </div>

            <div className='my-3'>
                <h2 className='font-bold pb-3'>Required Skills</h2>
                <div className='grid gap-1 text-xs'>
                    <span className='bg-gray-300 rounded-full'>Social Media Management</span>
                    <span className='bg-gray-300 rounded-full'>English</span>
                    <span className='bg-gray-300 rounded-full'>Copywriting</span>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
