import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { useLocation } from 'react-router-dom'
import { formatCurrency } from '../utils/formatCurrency'

const Orders = () => {

    const { products } = useContext(ShopContext)
    const { state: cartData } = useLocation()

    return (
        <div className='border-t border-gray-200 pt-16'>
            <div className="text-2xl">
                <Title text1={"MY"} text2={'ORDERS'} />
            </div>
            <div>
                {
                    cartData.map((item, index) => {
                        const product = products.find(product => product._id === item._id)
                        return (
                            <div key={index} className="py-4 border-y border-gray-200 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4" >
                                <div className="flex items-start gap-6 text-sm">
                                    <img className='w-16 sm:w-20' src={product.image[0]} alt="" />
                                    <div>
                                        <p className="sm:text-base font-medium">{product.name}</p>
                                        <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                                            <p className='text-lg'>{formatCurrency(product.price)}</p>
                                            <p>Quanity: {item.quantity}</p>
                                        </div>
                                        <p className='mt-2'>Date: <span className='text-gray-400'>{new Date().toLocaleDateString()}</span></p>
                                    </div>
                                </div>
                                <div className="md:w-1/2 flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                                        <p className="text-sm sm:text-base">Ready to Ship</p>
                                    </div>
                                    <button className='border border-gray-200 px-4 py-2 text-sm font-medium rounded-sm'>Track order</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Orders