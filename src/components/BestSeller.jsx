import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import Title from './Title'
import { useSelector } from 'react-redux'

const BestSeller = () => {

    const products = useSelector(state => state.products.products)
    const [bestProducts, setBestProducts] = useState([])

    useEffect(() => {
        setBestProducts(products.filter(product => product.bestseller).slice(0, 4))
    }, [products])
    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={"BEST"} text2={'SELLERS'} />
                <p className='w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Loved by puzzle fans everywhere — our most popular and top-rated designs!
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6">
                {bestProducts.map((product, index) => (
                    <ProductItem key={index} {...product} />
                ))}
            </div>
        </div>
    )
}

export default BestSeller