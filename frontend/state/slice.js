import { createSlice } from "@reduxjs/toolkit";;

const slice = createSlice({
    name: "app_state",
    initialState: {
        count: 0,
        day: 0,
    },
    reducers: {
        increment(state) {
            state.count++
        },
        nextDay(state, action) {
            const next = (state.day === 6) ? 0 : state.day + 1
            state.day = next
            // return { ...state, day: next }
        }
    }
})

export default slice.reducer

export const { //ACTION CREATORS
    increment,
    nextDay,
} = slice.actions