import React from 'react'

const Nearby = ({ images, title }) => {
    return (
        <div className='text-white bg-[#352089] py-4 px-8 text-center rounded-2xl shadow-md'>
            <img src={images} />
            <h1 className='font-bold pt-2'>{title}</h1>

        </div>
    )
}

export default Nearby