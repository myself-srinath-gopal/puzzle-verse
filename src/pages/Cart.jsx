import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice'
import { toast } from 'react-toastify'
import { formatCurrency } from '../utils/formatCurrency'

const Cart = () => {

    const { navigate } = useContext(ShopContext)
    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cart)
    const { products } = useSelector(state => state.products)

    const handleRemoveItem = (id, name) => {
        dispatch(removeFromCart(id));
        toast.info(`${name} removed from cart`, {
            position: 'bottom-right',
            autoClose: 2000,
        });
    };

    const handleUpdateQuantity = (id, quantity) => {
        dispatch(dispatch(updateQuantity({ id, quantity })))
    }

    return (
        <div className='pt-14'>
            <div className="text-2xl mb-3">
                <Title text1={"YOUR"} text2={'CART'} />
            </div>
            <div>
                {
                    cartItems.length > 0 ? (
                        cartItems.map((item, index) => {
                            const product = products.find(product => product._id === item._id)
                            return (
                                <div key={index} className="py-4 border-t border-gray-200 text-gray-600 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                                    <div className="flex items-start gap-6">
                                        <img src={product.image[0]} alt="" className='w-16 sm:w-20' />
                                        <div>
                                            <p className="text-xs sm:text-lg font-medium">{product.name}</p>
                                            <p className='text-sm sm:text-base text-gray-500'>{item.category} - {item.subCategory}</p>
                                            <div className="flex items-center gap-5 mt-2">
                                                <p>{formatCurrency(product.price)}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <input onChange={(e) => handleUpdateQuantity(item._id, Number(e.target.value))} className='border border-gray-200 max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
                                    <button onClick={() => handleRemoveItem(item._id, product.name)} className='cursor-pointer'>
                                        <img className='w-4 mr-4 sm:w-5' src={assets.bin_icon} alt="" />
                                    </button>
                                </div>
                            )
                        })
                    ) : (
                        <div className="text-center text-gray-600 text-lg">
                            Your cart is empty
                        </div>
                    )
                }
            </div>
            <div className="flex justify-end my-10">
                <div className="w-full sm:w-[480px]">
                    <CartTotal />
                    <div className="w-full text-end">
                        {
                            cartItems.length > 0 ?
                                <button onClick={() => navigate('/checkout')} disabled={cartItems.length === 0} className='bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer'>
                                    Checkout
                                </button>
                                :
                                <button onClick={() => navigate('/shop')} className='bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer'>
                                    Continue Shopping
                                </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart