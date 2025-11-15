import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <div class="text-center text-2xl pt-10 border-t border-gray-200">
                <Title text1={'CONTACT'} text2={'US'} />
            </div>
            <div className="my-10 flex flex-col md:flex-row justify-center gap-10 mb-28">
                <img src={assets.contact_img} alt="" className="w-full md:max-w-[480px]" />
                <div class="flex flex-col justify-center items-start gap-6">
                    <p class="font-semibold text-xl text-gray-600">Our Store</p>
                    <p class=" text-gray-500">0203,  Main Road <br /> Coimbatore, Tamilnadu, IN</p>
                    <p class=" text-gray-500">Tel: (+91) 9876543210 <br /> Email: puzzleverse@info.com</p>
                    <p class="font-semibold text-xl text-gray-600">For more info</p>
                    <p class=" text-gray-500">Learn more about our service and offers.</p>
                    <Link to={"#"} class="inline-block border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Send an Email</Link>
                </div>
            </div>
        </div>
    )
}

export default Contact