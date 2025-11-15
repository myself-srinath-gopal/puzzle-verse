import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

    const { navigate } = useContext(ShopContext)
    const [method, setMethod] = useState('cod')

    return (
        <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-200'>
            <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
                <div className="text-xl sm:text-2xl my-3">
                    <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                </div>
                <div className="flex gap-3">
                    <input required name="firstName" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name" value="" />
                    <input required name="lastName" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name" value="" />
                </div>
                <input required name="email" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Email address" value="" />
                <input required name="street" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" value="" />
                <div className="flex gap-3">
                    <input required name="city" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" value="" />
                    <input required name="state" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" value="" />
                </div>
                <div className="flex gap-3">
                    <input required name="pincode" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Pincode" value="" />
                    <input required name="country" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" value="" />
                </div>
                <input required name="phone" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone" value="" />
            </div>
            <div className="mt-8">
                <div className="mt-8 min-w-80">
                    <CartTotal />
                </div>
                <div className="mt-12">
                    <Title text1={'PAYMENT'} text2={'METHOD'} />
                    <div className="flex gap-3 flex-col lg:flex-row">
                        <button onClick={() => setMethod('stripe')} className="flex items-center gap-3 border border-gray-200 p-2 px-3 cursor-pointer">
                            <p className={`min-w-3.5 h-3.5 border border-gray-200 rounded-full ${method === 'stripe' ? 'bg-green-500' : ''}`}></p>
                            <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                        </button>
                        <button onClick={() => setMethod('razorpay')} className="flex items-center gap-3 border border-gray-200 p-2 px-3 cursor-pointer">
                            <p className={`min-w-3.5 h-3.5 border border-gray-200 rounded-full ${method === 'razorpay' ? 'bg-green-500' : ''}`}></p>
                            <img className='h-5c mx-4' src={assets.razorpay_logo} alt="" />
                        </button>
                        <button onClick={() => setMethod('cod')} className="flex items-center gap-3 border border-gray-200 p-2 px-3 cursor-pointer">
                            <p className={`min-w-3.5 h-3.5 border border-gray-200 rounded-full ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
                            <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
                        </button>
                    </div>
                    <div className="w-full text-end mt-8">
                        <button onClick={() => navigate("/orders")} className="bg-black text-white py-3 px-16 text-sm active:bg-gray-700 cursor-pointer">PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder