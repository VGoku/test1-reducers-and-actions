import { createSlice } from "@reduxjs/toolkit";;

const slice = createSlice({
    name: "app_state",
    initialState: {
        count: 0,
        day: 0,
        savings: 10,
    },
    reducers: {
        increment(state) {
            state.count++
        },
        nextDay(state, action) {
            const next = (state.day === 6) ? 0 : state.day + 1
            state.day = next
            // return { ...state, day: next }
        },
        save(state, action) {
            const amount = action.payload
            state.savings += amount
        },
        spend(state, action) {
            const amount = action.payload
            state.savings = amount < state.savings
            ? state.savings - amount
            : 0
        }
    }
})

export default slice.reducer

export const { //ACTION CREATORS
    increment,
    nextDay,
    save,
    spend,
} = slice.actions