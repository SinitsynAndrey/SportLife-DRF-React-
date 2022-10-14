import axios from 'axios'
import { getToken, getUser, addUser, errors } from "../slices/userSlice"

// axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
// axios.defaults.xsrfCookieName = 'csrftoken'



export const getUserAction = (username, token) => dispatch => {

    const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token
        }

    axios.get(`http://127.0.0.1:8000/api/users/${username}`, { headers })
        .then(response => {
        console.log(headers);
        dispatch(getUser(response.data))})
        .catch((err) => {
        console.log(headers);
        dispatch(errors({

            msg: err.response.data,
            status: err.response.status
        }))})
}

export const getTokenAction = (data) => dispatch => {
    axios.post('http://127.0.0.1:8000/api-token-auth/', data)
        .then(response => {dispatch(getToken(response.data));})
        .catch((err) => dispatch(errors({
            msg: err.response.data,
            status: err.response.status
        })))
}

export const addUserAction = (user) => dispatch => {
    axios.post('http://127.0.0.1:8000/api/users/', user)
        .then(response => {
            dispatch(addUser(response.data));
        })
        .catch((err) => dispatch(errors({
            msg: err.response.data,
            status: err.response.status
        })))
}

//export const deleteUserAction = (id) => dispatch => {
//    axios.delete(`http://127.0.0.1:8000/api/users/${id}/`)
//        .then(response => {dispatch(deleteUser(id));})
//        .catch((err) => dispatch(errors({
//            msg: err.response.data,
//            status: err.response.status
//        })))
//}