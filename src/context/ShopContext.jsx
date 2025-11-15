import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {

    const delivery_fee = 49
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})
    const navigate = useNavigate()


    const addToCart = (itemId) => {

        let cartData = { ...cartItems }
        if (cartData[itemId]) {
            if (cartData[itemId]) {
                cartData[itemId] += 1
            } else {
                cartData[itemId] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId] = 1
        }
        setCartItems(cartData)
    }

    const updateQuantity = (itemId, quantity) => {
        const cartData = { ...cartItems }
        cartData[itemId] = quantity
        setCartItems(cartData)
    }

    const value = {
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        updateQuantity,
        navigate
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider