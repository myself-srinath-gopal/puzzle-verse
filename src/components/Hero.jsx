import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
                <div className="text-[#414141]">
                    <div className="flex items-center gap-4">
                        <p className="w-8 md:w-11 h-px bg-[#414141]"></p>
                        <p className="text-sm md:text-base">OUR BESTSELLERS</p>
                    </div>
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                    <div className="flex items-center gap-4">
                        <Link to={"/shop"} className="bg-black text-white text-xs md:text-base py-2 sm:py-3 px-4 sm:px-5 font-normal">SHOP NOW</Link>
                        <p className="w-8 md:w-11 h-px bg-[#414141]"></p>
                    </div>
                </div>
            </div>
            <img src={assets.hero_img} alt="" className="w-full sm:w-1/2" />
        </div>
    )
}

export default Hero