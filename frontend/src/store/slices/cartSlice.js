import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        return serializedState ? JSON.parse(serializedState) : [];
    } catch (err) {
        return [];
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart', serializedState);
    } catch (err) {
        // Ignore write errors
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: loadState(),
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
            saveState(state.items);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            saveState(state.items);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity = Math.max(1, quantity);
            }
            saveState(state.items);
        },
        clearCart: (state) => {
            state.items = [];
            saveState([]);
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
