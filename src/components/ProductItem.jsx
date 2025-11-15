import React from 'react'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../utils/formatCurrency'

const ProductItem = ({ _id, image, name, price }) => {

    return (
        <Link className='text-gray-700 bg-[#f1f1f1] rounded-lg text-center' to={`/product/${_id}`}>
            <div className="w-full h-40 sm:h-72 overflow-hidden rounded-t-md">
                <img className='h-full w-full object-cover' src={image[0]} alt="" />
            </div>
            <div className="flex flex-col p-2 sm:p-3 md:p-5">
                <p className="pb-1 text-sm sm:text-base">{name}</p>
                <p className="text-sm sm:text-base font-medium">{formatCurrency(price)}</p>
            </div>
        </Link>
    )
}

export default ProductItem