import React from 'react'
import { FaCalendarWeek, FaMap } from "react-icons/fa";
import { FaUserGroup } from 'react-icons/fa6';


const SearchBox = () => {
  return (
    <div className='bg-white rounded-2xl p-4 flex flex-wrap items-center justify-between gap-6 mt-6 w-[95%] sm:w-[80%] mx-auto shadow-md'>
      
      {/* Location */}
      <div className='flex items-center space-x-3'>
        <FaMap className="w-5 h-5 text-blue-600"/>
        <div>
          <p className='text-sm text-gray-600 font-medium'>Location</p>
          <input 
            type="text"
            placeholder='Where are you going?'
            className='outline-none border-none placeholder:text-gray-500 text-black'
          />
        </div>
      </div>

      {/* Start Date */}
      <div className='flex items-center space-x-3'>
        <FaCalendarWeek className='w-5 h-5 text-blue-600'/>
        <div>
          <p className='text-sm text-gray-600 font-medium'>Start Date</p>
          <input 
            type="date" 
            className='outline-none text-black border-none'
          />
        </div>      
      </div>

      {/* End Date */}
      <div className='flex items-center space-x-3'>
        <FaCalendarWeek className='w-5 h-5 text-blue-600'/>
        <div>
          <p className='text-sm text-gray-600 font-medium'>End Date</p>
          <input 
            type="date" 
            className='outline-none text-black border-none'
          />
        </div>      
      </div>

      {/* Guests */}
      <div className='flex items-center space-x-3'>
        <FaUserGroup className='w-5 h-5 text-blue-600'/>
        <div>
          <p className='text-sm text-gray-600 font-medium'>Guest</p>
          <p className='text-base text-black font-normal'>1 Guest • 1 Room</p>
        </div>

      
      </div>
    </div>
  )
}

export default SearchBox
