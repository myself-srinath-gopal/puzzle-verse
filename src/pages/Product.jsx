import React from 'react'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/slices/cartSlice'
import { toast } from 'react-toastify'
import { formatCurrency } from '../utils/formatCurrency'

const Product = () => {

    const { productId } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.products.products.find(product => product._id === productId))

    const handleAddToCart = () => {
        dispatch(addToCart(product))
        toast.success(`${product.name} added to cart!`, {
            position: 'bottom-right',
            autoClose: 2000,
        });
    }

    return product ? (
        <div className='border-t border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            <div className="flex gap-2 sm:gap-12 flex-col sm:flex-row">
                <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                        <img src={product.image[0]} alt="" className='w-24% sm:w-full sm:mb-3 shrink-0 cursor-pointer' />
                    </div>
                    <div className="w-full sm:w-[80%]">
                        <img src={product.image[0]} alt="" className='w-full h-auto' />
                    </div>
                </div>
                <div className="flex-1">
                    <h1 className='font-medium text-2xl mt-2'>{product.name}</h1>
                    <div className="flex items-center gap-1 mt-2">
                        {
                            Array(4).fill().map((_, index) => (
                                <img src={assets.star_icon} alt="" key={index} className='w-3.5' />
                            ))
                        }
                        <img src={assets.star_dull_icon} className='w-3.5' alt="" />
                        <p className='text-gray-500 pl-2'>(124) reviews</p>
                    </div>
                    <p className="mt-5 text-3xl font-medium">{formatCurrency(product.price)}</p>
                    <p className="mt-5 text-gray-500 md:w-4/5">{product.description}</p>
                    <button onClick={handleAddToCart} className="bg-black text-white py-3 px-8 text-sm active:bg-gray-700 cursor-pointer my-8">ADD TO CART</button>
                    <hr className='text-gray-200 mt-8 sm:w-4/5' />
                    <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>
            {/* Description & Reviews */}
            <div className="mt-20">
                <div className="flex">
                    <strong className="border border-gray-200 border-r-0 border-b-0 px-5 py-3 text-sm sm:text-base">Description</strong>
                    <p className="border border-gray-200 border-b-0 px-5 py-3 text-sm sm:text-base">Reviews (124)</p>
                </div>
                <div className="flex flex-col gap-4 border border-gray-200 p-6 text-sm  text-gray-500">
                    <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
                    <p> E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
                </div>
            </div>
            {/* Realated Products */}
            {/* <RelatedProducts category={product.category} subCategory={product.subCategory} /> */}
        </div>
    ) : <div className="opacity-0"></div>
}

export default Product