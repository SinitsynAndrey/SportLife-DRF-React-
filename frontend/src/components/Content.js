import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../store/slices/userSlice';
import WithoutLogin from './WithoutLogin';
import Cookies from 'universal-cookie';
import { getUserAction } from '../store/actions/userActions';

function Content() {
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch()

    useEffect(() => { 
        const cookies = new Cookies();
        if (cookies.get('token')) {
            dispatch(getUserAction(cookies.get('token')))
        }
    }, [])

    return (
        <div>
            {user ?
                <div>
                    {user.username}
                    <button className='btn' onClick={() => dispatch(logout())}>Logout</button>
                </div>
            :
            <WithoutLogin/>
            }
        </div>
    )
}

export default Content