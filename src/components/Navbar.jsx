import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const { showSearch, setShowSearch } = useContext(ShopContext)
    const [visible, setVisible] = useState(false)
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const { pathname } = useLocation()

    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <Link to={"/"} className="flex items-center logo">
                <div className="bg-black border border-black text-white text-[.9rem] text-base sm:text-lg p-1.5 sm:p-2">PUZZLE</div>
                <div className="bg-transparent border border-black text-black text-[.9rem] text-base sm:text-lg p-1.5 sm:p-2">VERSE</div>
            </Link>
            <ul className='hidden sm:flex gap-5 text-sm sm:text-base text-gray-700'>
                <NavLink to={"/"} className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden' />
                </NavLink>
                <NavLink to={"/shop"} className='flex flex-col items-center gap-1'>
                    <p>SHOP</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden' />
                </NavLink>
                <NavLink to={"/about"} className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden' />
                </NavLink>
            </ul>
            <div className="flex items-center gap-4 md:gap-6">
                {pathname.includes('shop') && (
                    <button onClick={() => setShowSearch(!showSearch)}>
                        <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
                    </button>
                )}
                <Link to={"/login"} className='flex items-center'>
                    <img src={assets.profile_icon} alt="" className="w-5 cursor-pointer" />
                </Link>
                <Link to={"/cart"} className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                    <p className="absolute -bottom-1.5 -right-1.5 w-4 bg-black text-center leading-4 text-white aspect-square text-[9px] rounded-full">{totalItems}</p>
                </Link>
                <button onClick={() => setVisible(!visible)} className='sm:hidden cursor-pointer'>
                    <img src={assets.menu_icon} className='w-5' alt="" />
                </button>
            </div>
            {/* Mobile Menu */}

            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-700 z-999 ${visible ? 'w-full' : 'w-0'}`}>
                <div className="flex flex-col text-gray-600">
                    <button onClick={() => setVisible(!visible)} className="flex items-center gap-4 p-3 cursor-pointer">
                        <img src={assets.dropdown_icon} alt="" className="h-4 rotata-180" />
                        <p>Back</p>
                    </button>
                    <NavLink onClick={() => setVisible(!visible)} className="py-2 pl-6" to={"/"}>HOME</NavLink>
                    <NavLink onClick={() => setVisible(!visible)} className="py-2 pl-6" to={"/shop"}>SHOP</NavLink>
                    <NavLink onClick={() => setVisible(!visible)} className="py-2 pl-6" to={"/about"}>ABOUT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar