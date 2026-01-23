import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { setFilters, setSortBy } from '../store/slices/productSlice'
import { assets } from '../assets/assets'

const Shop = () => {

    const { search, showSearch } = useContext(ShopContext)
    const { filteredProducts } = useSelector(state => state.products)
    const dispatch = useDispatch()
    const [showFilter, setShowFilter] = useState(false)

    useEffect(() => {
        if (showSearch && search) {
            dispatch(setFilters({ searchTerm: search }))
        }
    }, [search, showSearch, dispatch])

    return (
        <div className='flex flex-col gap-1 pt-10 border-t border-gray-200'>
            <div className="flex-1">
                <div className="flex flex-col lg:items-center lg:flex-row justify-between mb-4">
                    <Title text1={'ALL'} text2={'COLLECTIONS'} />
                    <div className="flex items-center gap-6">
                        <select onChange={(e) => dispatch(setSortBy(e.target.value))} className="border border-gray-300 text-sm sm:text-base px-3 py-2">
                            <option value="relevant">Sort by: Relevant</option>
                            <option value="low-high">Sort by: Low - High</option>
                            <option value="high-low">Sort by: High - Low</option>
                        </select>
                        <button onClick={() => setShowFilter(!showFilter)} className="my-2 text-base sm:text-lg flex items-center cursor-pointer gap-2 bg-black text-white px-4 py-2 rounded-full">
                            FILTERS
                            <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-180' : ''}`} alt="" />
                        </button>
                    </div>
                </div>
                {
                    showFilter && (
                        <div className='mb-10'>
                            <div className="flex items-center justify-end gap-8 border border-gray-300 px-7 py-5 mt-6">
                                <div>
                                    <p className="text-sm font-medium mb-2">CATEGORIES</p>
                                    <div className="flex flex-col gap-2 text-sm font-light text-gray-900 w-full">
                                        <select onChange={(e) => dispatch(setFilters({ category: e.target.value }))} className="border border-gray-300 text-sm sm:text-base px-3 py-2 rounded-md">
                                            <option value="all">All</option>
                                            <option value="1000-pieces">1000 Pieces</option>
                                            <option value="500-pieces">500 Pieces</option>
                                            <option value="200-pieces">200 Pieces</option>
                                            <option value="100-pieces">100 Pieces</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium mb-2">TYPE</p>
                                    <div className="flex flex-col gap-2 text-sm font-light text-gray-900 w-full">
                                        <select onChange={(e) => dispatch(setFilters({ subCategory: e.target.value }))} className="border border-gray-300 text-sm sm:text-base px-3 py-2 rounded-md">
                                            <option value="all">All</option>
                                            <option value="nature">Nature</option>
                                            <option value="people">People</option>
                                            <option value="abstract">Abstract</option>
                                            <option value="dolphin">Dolphin</option>
                                            <option value="sand-castle">Sandcastle</option>
                                            <option value="eagle">Eagle</option>
                                            <option value="pig">Pig</option>
                                            <option value="temple">Temple</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {filteredProducts.map((product, index) => (
                        <ProductItem key={index} {...product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop