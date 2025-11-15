import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'
import { formatCurrency } from '../utils/formatCurrency'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'
import { clearCart } from '../store/slices/cartSlice'

const Checkout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { cartItems, totalAmount } = useSelector(state => state.cart)
    const { delivery_fee } = useContext(ShopContext)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: ''
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const requiredFields = Object.keys(formData);
        const isValid = requiredFields.every(field => formData[field].trim() !== '');

        if (!isValid) {
            toast.error('Please fill in all the required fields', {
                position: 'bottom-right',
                autoClose: 3000,
            })
            return
        }

        toast.success('Order placed successfully!', {
            position: 'bottom-right',
            autoClose: 3000,
        })

        dispatch(clearCart())
        setTimeout(() => {
            navigate('/')
        }, 2000)
    }

    if (cartItems.length === 0) {
        navigate('/cart')
        return null
    }
    return (
        <div className='pt-14'>
            <div className="md:mb-3">
                <Title text1={"YOUR"} text2={'CHECKOUT'} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2">
                    <form onSubmit={handleSubmit} className='p-2 md:p-6 rounded-md'>
                        <div className="flex items-center mb-6">
                            <h2 className="text-xl md:text-2xl whitespace-nowrap"><span className='text-gray-500'>SHIPPING</span> INFORMATION</h2>
                            <p className='w-12 h-[1.5px] bg-gray-700 ml-2' />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:ml-4">
                            <div>
                                <label htmlFor="name">Fullname</label>
                                <input className='form-input' id='name' value={formData.name} onChange={handleInputChange} required />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input className='form-input' id='email' type="email" value={formData.email} onChange={handleInputChange} required />
                            </div>
                            <div className='md:col-span-2'>
                                <label htmlFor="phone">Phone</label>
                                <input className='form-input' id='phone' value={formData.phone} onChange={handleInputChange} required />
                            </div>
                            <div className='md:col-span-2'>
                                <label htmlFor="address">Address</label>
                                <input className='form-input' id='address' value={formData.address} onChange={handleInputChange} required />
                            </div>
                            <div>
                                <label htmlFor="city">City</label>
                                <input className='form-input' id='city' value={formData.city} onChange={handleInputChange} required />
                            </div>
                            <div>
                                <label htmlFor="state">State</label>
                                <input className='form-input' id='state' value={formData.state} onChange={handleInputChange} required />
                            </div>
                            <div>
                                <label htmlFor="pincode">Pincode</label>
                                <input className='form-input' id='pincode' value={formData.pincode} onChange={handleInputChange} required />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="lg:col-span-1">
                    <div className="p-2 md:p-6 rounded-md sticky top-24">
                        <div className="flex items-center mb-6">
                            <h2 className="text-xl md:text-2xl"><span className='text-gray-500'>ORDER</span> SUMMARY</h2>
                            <p className='w-12 h-[1.5px] bg-gray-700 ml-2' />
                        </div>
                        <div className="space-y-4 mb-6">
                            {
                                cartItems.map(item => (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">{item.quantity} x {item.name}</span>
                                        <span className="font-semibold">{formatCurrency(item.price * item.quantity)}.00</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="border-t border-gray-300 pt-4 mb-6">
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-500">Subtotal</span>
                                <span className='font-semibold'>{formatCurrency(totalAmount)}.00</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-500">Shipping Fee</span>
                                <span className='font-semibold'>{formatCurrency(delivery_fee)}.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Total</span>
                                <span className='font-semibold'>{formatCurrency(totalAmount)}.00</span>
                            </div>
                        </div>
                        <button onClick={handleSubmit} className='w-full bg-black text-white py-2 rounded-md cursor-pointer'>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout