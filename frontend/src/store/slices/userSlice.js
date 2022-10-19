 import { createSlice } from "@reduxjs/toolkit";
 import Cookies from 'universal-cookie';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        token: null,
        errors: {},
    },

    reducers: {
        getUser(state, action) {
            state.user = action.payload;
        },

        getToken(state, action) {
            state.token = action.payload;
            const cookies = new Cookies();
            cookies.set('token', state.token)
        },

        logout(state) {
            const cookies = new Cookies();
            cookies.set('token', '')
            state.user = '';
            state.token = '';
        },

        addUser(state, action) {
            state.user = action.payload;
        },

        errors(state, action) {
            state.errors = action.payload
        }
    }
})

export const { getToken, getUser, addUser, errors, logout } = userSlice.actions;

export default userSlice.reducer;
