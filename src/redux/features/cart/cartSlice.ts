// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            console.log('Adding to cart:', action.payload);
            const existing = state?.items?.find(item => item.productId === action.payload.productId);
            if (existing) {
                existing.quantity += action.payload.quantity;
            } else {
                console.log('push');
                state?.items?.push(action.payload);
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state?.items?.filter(item => item.productId !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
        updateQuantity: (state, action: PayloadAction<{ productId: string; type: 'inc' | 'dec' }>) => {
            const item = state.items.find(item => item.productId === action.payload.productId);
            if (item) {
                if (action.payload.type === 'inc') {
                    item.quantity += 1;
                } else if (action.payload.type === 'dec' && item.quantity > 1) {
                    item.quantity -= 1;
                }
            }
        }

    },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
