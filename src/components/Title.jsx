import React from 'react'

const Title = ({ text1, text2 }) => {
    return (
        <div className="inline-flex gap-3 sm:gap-4 items-center mb-7">
            <p className='text-lg sm:text-xl md:text-4xl text-gray-500'>{text1} <span className='text-gray-700'>{text2}</span></p>
            <p className='w-8 sm:w-12 h-px sm:h-0.5 bg-gray-700'></p>
        </div>
    )
}

export default Title