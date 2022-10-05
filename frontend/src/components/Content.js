import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../store/actions/usersActions'


function Content() {
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch()

    useEffect(() => { dispatch(getUsers()) }, []);

    return (
        <div>
            <button onClick={() => dispatch(getUsers())}>users</button>
            <div>
                {users.length > 0 ?
                    <div>
                        {users.map(user => <div key={user.id}>{user.username}</div>
                        )}
                    </div>
                    :
                    <div>
                        Loading...
                    </div>
                }
            </div>
        </div>
    )
}

export default Content