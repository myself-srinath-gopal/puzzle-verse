import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div>
            <div className="text-center pt-8 border-t border-gray-200">
                <Title text1={'ABOUT'} text2={'US'} />
            </div>
            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-sm sm:text-base">
                    <p>At PuzzleVerse, we believe that puzzles are more than just pieces that fit together — they’re experiences that connect people, calm the mind, and spark imagination. What started as a simple love for creativity and design turned into a mission to bring beautifully crafted puzzles to homes around the world. Every puzzle we create is designed to inspire curiosity, challenge the mind, and celebrate the joy of discovery.</p>
                    <p>Each collection we release is thoughtfully curated — from selecting premium materials to collaborating with talented artists and illustrators. Our goal is to combine art, quality, and craftsmanship to deliver puzzles that are not only fun but also frame-worthy once completed. Whether you’re a casual puzzler or a serious collector, our designs are made to offer both relaxation and reward.</p>
                    <strong className='text-gray-800'>Our Mission</strong>
                    <p>Our mission is to elevate the art of puzzling through thoughtful design and craftsmanship. We’re dedicated to creating visually stunning, high-quality puzzles that inspire creativity, mindfulness, and appreciation for detail in every piece.</p>
                </div>
            </div>
            <div className="py-4">
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>
            <div className="flex flex-col md:flex-row text-sm sm:text-base mb-20">
                <div className="border border-gray-200 border-r-0 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <strong>Quality Assurance:</strong>
                    <p className=" text-gray-600">
                        We meticulously select and vet each product to ensure it meets our stringent quality standards.
                    </p>
                </div>
                <div className="border border-gray-200 border-r-0 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <strong>Convenience:</strong>
                    <p className=" text-gray-600">
                        With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
                    </p>
                </div>
                <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <strong>Exceptional Customer Service:</strong>
                    <p className=" text-gray-600">
                        Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About