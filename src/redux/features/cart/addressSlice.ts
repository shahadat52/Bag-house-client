// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TAddress {
    name: string;
    phone: string;
    email: string;
    address: string;
    isAdded: boolean;
}



const initialState: TAddress = {
    name: '',
    phone: '',
    email: '',
    address: '',
    isAdded: false,
};

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        addAddress: (state, action: PayloadAction<TAddress>) => {
            // Check if the address is already added
            if (state.isAdded) return state;

            return {
                ...action.payload,
                isAdded: true,
            };
        },
        editAddress: (state) => {
            return {
                ...state,
                isAdded: false,
            };
        },


    },
});

export const { addAddress, editAddress } = addressSlice.actions;
export default addressSlice.reducer;
