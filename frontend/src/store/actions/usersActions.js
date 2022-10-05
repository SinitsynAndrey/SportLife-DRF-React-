import { usersList, addUser, deleteUser, errors } from "../reducers/usersReducer"
import axios from 'axios'

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
axios.defaults.xsrfCookieName = 'csrftoken'

export const getUsers = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/users/')
        .then(response => {
            dispatch(usersList(response.data));
        })
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

export const deleteUserAction = (id) => dispatch => {
    axios.delete(`http://127.0.0.1:8000/api/users/${id}/`)
        .then(response => {
            dispatch(deleteUser(id));
        })
        .catch((err) => dispatch(errors({
            msg: err.response.data,
            status: err.response.status
        })))
}