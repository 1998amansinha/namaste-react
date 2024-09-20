import cartReducer from "./cartSlice";

const { configureStore, createStore } = require("@reduxjs/toolkit");

const appStore  = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default appStore;