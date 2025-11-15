import React, { useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSelector } from 'react-redux'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

    const products = useSelector(state => state.products.products)
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(() => {
        setLatestProducts(products)
    }, [products])
    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={"LATEST"} text2={'COLLECTIONS'} />
                <p className='w-3/4 mx-auto text-sm md:text-base text-gray-600'>
                    Dive into the latest collection of jigsaw puzzles — where every piece tells a new story.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6">
                {latestProducts.map((product, index) => (
                    <ProductItem key={index} {...product} />
                ))}
            </div>
        </div>
    )
}

export default LatestCollection