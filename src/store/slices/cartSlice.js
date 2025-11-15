import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
    const saved = localStorage.getItem('puzzleverse-cart');
    return saved ? JSON.parse(saved) : [];
};

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('puzzleverse-cart', JSON.stringify(cart));
};

const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

const initialState = {
    cartItems: loadCartFromLocalStorage(),
    totalAmount: calculateTotal(loadCartFromLocalStorage()),
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                const { _id, name, price, category, subCategory } = action.payload
                state.cartItems.push({
                    _id,
                    name,
                    price,
                    category,
                    subCategory,
                    quantity: 1,
                });
            }
            state.totalAmount = calculateTotal(state.cartItems);
            saveCartToLocalStorage(state.cartItems);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload);
            state.totalAmount = calculateTotal(state.cartItems);
            saveCartToLocalStorage(state.cartItems);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.cartItems.find(item => item._id === id);
            if (existingItem) {
                existingItem.quantity = quantity;
                state.totalAmount = calculateTotal(state.cartItems);
                saveCartToLocalStorage(state.cartItems);
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.totalAmount = 0;
            saveCartToLocalStorage(state.cartItems);
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;