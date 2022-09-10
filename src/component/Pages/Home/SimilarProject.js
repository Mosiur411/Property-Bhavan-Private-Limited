import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
const SimilarProject = ({ samilerproject, title, location, prics, bgColor }) => {
    return (
        <div className={`w-[300px] border-2 rounded-lg  p-3 shadow-md bg-[#fff] text-balck }`}>
            <img src={samilerproject} />
            <h1 className='text-xl my-2 font-medium '>{title}</h1>
            <div className={`flex justify-between items-center  `}>
                <div className='flex gap-3 items-center'>
                    < MdOutlineLocationOn className={`w-5`} />
                    <p className='font-medium '>{location}</p>
                </div>
                <h1>{prics}</h1>
            </div>
            <button className='w-full my-5 bg-[#7F56D9] text-white py-1 font-medium rounded-lg shadow-inner'>Contact Now</button>
            <button className='w-full mb-5 bg-[#FFFFFF] text-black py-1 font-medium rounded-lg border-2 shadow-inner '>Learn more</button>

        </div>
    )
}

export default SimilarProject