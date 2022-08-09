import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        usersList(state, action) {
            state.users = action.payload
        },
        addUser(state, action) {
            state.users.push(action.payload)
        }
    }
})

export const { usersList, addUser } = usersSlice.actions;

export default usersSlice.reducer;
