import axios from 'axios'
import { getToken, getUser, addUser, errors } from "../slices/userSlice"

export const getUserAction = (token) => dispatch => {
    dispatch(errors({
        msg: '',
        status: ''
    }))

    const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token.auth_token
        }

    axios.get(`http://127.0.0.1:8000/auth/users/me/`, { headers })
        .then(response => {
            dispatch(getUser(response.data))})
        .catch((err) => {dispatch(errors({
            msg: err.response.data,
            status: err.response.status
        }))})
}

export const getTokenAction = (data) => dispatch => {
    dispatch(errors({
        msg: '',
        status: ''
    }))
    axios.post('http://127.0.0.1:8000/auth/token/login/', data)
        .then(response => {
            dispatch(getToken(response.data))
            dispatch(getUserAction(response.data))
        })
        .catch((err) => dispatch(errors({
            msg: err.response.data,
            status: err.response.status
        })))
}

export const registationAction = (user) => dispatch => {
    dispatch(errors({
        msg: '',
        status: ''
    }))
        axios.post('http://127.0.0.1:8000/auth/users/', user)
        .then(response => {
            dispatch(addUser(response.data))
            dispatch(getTokenAction(user))
        })
        .catch((err) => {
            dispatch(errors({
            msg: err.response.data,
            status: err.response.status
        }))})
}
