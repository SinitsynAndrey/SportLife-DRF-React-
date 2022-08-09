import { usersList, addUser } from "../reducers/usersReducer"
import axios from 'axios'

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
axios.defaults.xsrfCookieName = 'csrftoken'

export const getUsers = () => dispatch => {
    axios.get('/api/users/')
        .then(response => {
            dispatch(usersList(response.data));
        })
}

export const addUserAction = (user) => dispatch => {
    axios.post('/api/users/', user)
        .then(response => {
            dispatch(addUser(response.data));
        })
}
