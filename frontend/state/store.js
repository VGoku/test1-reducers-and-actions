import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";
import friendsReducer from "./friendsSlice"

export const store = configureStore({
    reducer: {
        state: slice,
        friends: friendsReducer,
    }
})