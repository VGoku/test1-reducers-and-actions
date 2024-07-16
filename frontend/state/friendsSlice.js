import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "friends",
    initialState: {
        list: [],
    }
})

export default slice.reducer