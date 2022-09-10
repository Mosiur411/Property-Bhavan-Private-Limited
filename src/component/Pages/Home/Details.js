import React from 'react'

const Details = ({ images, title, text }) => {
    return (
        <div className='border-4 border-[#36218B] py-5 px-10 rounded-lg text-black shadow-md'>
            <img src={images} />
            <h1 className='text-xl font-bold '>{title}</h1>
            <span className='text-sm '>{text}</span>
        </div>
    )
}

export default Details