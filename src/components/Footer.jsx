import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 md:mt-30 text-sm'>
                <div>
                    <Link to={"/"} className="flex items-center mb-5 logo">
                        <div className="bg-black border border-black text-white text-[.9rem] sm:text-base p-1.5 sm:p-2">PUZZLE</div>
                        <div className="bg-transparent border border-black text-black text-[.9rem] sm:text-base p-1.5 sm:p-2">VERSE</div>
                    </Link>
                    <p className="w-full md:w-2/3 text-gray-600 text-sm sm:text-base">Dedicated to the art of puzzling, <strong>PuzzleVerse</strong> offers premium-quality puzzles that inspire imagination and connection. Each design tells a story, inviting you to piece together moments that matter.</p>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600 text-sm sm:text-base">
                        <li>
                            <Link className='hover:text-black' to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link className='hover:text-black' to={"/shop"}>Shop</Link>
                        </li>
                        <li>
                            <Link className='hover:text-black' to={"/about"}>About Us</Link>
                        </li>
                        <li>
                            <Link className='hover:text-black' to={"/contact"}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600 text-sm sm:text-base">
                        <li>
                            <Link className='hover:text-black' to={"#"}>+91 9876543210</Link>
                        </li>
                        <li>
                            <Link className='hover:text-black' to={"#"}>puzzleverse@info.com</Link>
                        </li>
                        <li>
                            <Link className='hover:text-black' to={"#"}>@puzzleverse</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <hr className='text-gray-200'/>
                <p className="py-5 text-sm sm:text-base text-center">
                    Copyright © 2025 Puzzleverse - All rights reserved
                </p>
            </div>
        </>
    )
}

export default Footer