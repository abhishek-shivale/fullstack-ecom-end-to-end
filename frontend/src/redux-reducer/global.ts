import { createSlice } from "@reduxjs/toolkit";
interface CartItem{
    id:number,
    title:string,
    price:number,
    image:string
}
export const globalSlice = createSlice({
    name: "global",
    initialState: {
        loggedIn: false,
        cart: [] as CartItem[]
    },
    reducers: {
        checkLoggedIn: (state) => {
            state.loggedIn = !state.loggedIn;
        },
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((product) => product.id !== action.payload);
        }
        
        
    }
});

export const { checkLoggedIn, addToCart, removeFromCart } = globalSlice.actions;
export default globalSlice.reducer;
