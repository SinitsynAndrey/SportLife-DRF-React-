import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userList } from '../store/reducers/usersReducer'
import { getUsers, addUser } from '../store/actions/usersActions'
import Form from './Form'


function Content() {
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    },
        []
    );

    return (
        <div>
            <button onClick={() => dispatch(getUsers())}>users</button>
            <div>
                {users.length > 0 ?
                    <div>
                        {users.map(user => <div key={user.id}>{user.username}</div>)}
                    </div>
                    :
                    <div>
                        Loading...
                    </div>
                }
            </div>
            <Form />
        </div>
    )
}

export default Content