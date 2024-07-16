import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "friends",
    initialState: {
        list: [
            { id: "ldo", name: "Pam", fav: true },
            { id: "1sb", name: "Jess", fav: false },
            { id: "xu7", name: "Ana", fav: false },
        ],
    },
    reducers: {
        createFriend: {
            prepare(name) {
                return {
                payload: {
                name, fav: false,
                id: Math.random().toString(36).slice(2, 5)
                    }
                }
            },
            reducer(state, action) {
                state.list.push(action.payload)
            }
        },
        deleteFriend(state, action) {
            const id = action.payload
            state.list = state.list
                .filter(fr => fr.id !== id)
        },
        favFriend(state, action) {
            const id = action.payload
            const friend = state.list
                .find(fr => fr.id === id)
            friend.fav = !friend.fav
        },
    }
})

export default slice.reducer

export const {
    deleteFriend, favFriend, createFriend
} = slice.actions