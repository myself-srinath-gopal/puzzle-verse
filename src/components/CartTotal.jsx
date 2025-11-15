import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import { formatCurrency } from '../utils/formatCurrency'
import { useSelector } from 'react-redux'

const CartTotal = () => {

    const { delivery_fee } = useContext(ShopContext)
    const { totalAmount } = useSelector(state => state.cart)

    return (
        <div className="w-full">
            <div className="text-2xl">
                <Title text1={"CART"} text2={'TOTAL'} />
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{formatCurrency(totalAmount)}.00</p>
                </div>
                <hr className='text-gray-200' />
                <div className="flex justify-between">
                    <p>Delivery Fee</p>
                    <p>{formatCurrency(delivery_fee)}.00</p>
                </div>
                <hr className='text-gray-200' />
                <div className="flex justify-between">
                    <strong>Total</strong>
                    <strong>{formatCurrency(totalAmount + delivery_fee)}.00</strong>
                </div>
            </div>
        </div>
    )
}

export default CartTotal