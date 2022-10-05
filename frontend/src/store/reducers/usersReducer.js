 import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        errors: {},
        message: ''
    },

    reducers: {
        usersList(state, action) {
            state.users = action.payload;
            state.errors = {};
        },
        addUser(state, action) {
            state.users.push(action.payload);
            state.message = `Пользователь ${action.payload.username} зарегистрирован`
            state.errors = {};
        },
        deleteUser(state, action) {
            state.users = state.users.filter(user => user.id === action.payload);
            state.errors = {};
        },
        errors(state, action) {
            state.errors = action.payload
        }
    }
})

export const { usersList, addUser, deleteUser, errors } = usersSlice.actions;

export default usersSlice.reducer;
