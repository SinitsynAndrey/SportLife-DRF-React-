 import { createSlice } from "@reduxjs/toolkit";
 import Cookies from 'universal-cookie';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        token: null,
        errors: {},
        message: ''
    },

    reducers: {
        getUser(state, action) {
            state.user = action.payload;
            const cookies = new Cookies();
            cookies.set('user', state.user)
            state.errors = {};
        },

        getToken(state, action) {
            state.token = action.payload;
            const cookies = new Cookies();
            cookies.set('token', state.token)
            state.errors = {}
        },

        setData(state) {
            const cookies = new Cookies()
            state.token = cookies.get('token')
            state.user = cookies.get('user')    
        },

        logout(state) {
            const cookies = new Cookies();
            cookies.set('token', '')
            cookies.set('user', '')
            state.user = '';
            state.token = '';
            state.errors = {};
        },

        addUser(state, action) {
            state.users.push(action.payload);
            state.message = `Пользователь ${action.payload.username} зарегистрирован`
            state.errors = {};
        },

        errors(state, action) {
            state.errors = action.payload
        }
    }
})

export const { getToken, getUser, addUser, errors, setData, logout } = userSlice.actions;

export default userSlice.reducer;
