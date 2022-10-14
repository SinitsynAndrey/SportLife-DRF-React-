import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../store/slices/userSlice';
import WithoutLogin from './WithoutLogin';
import { setData } from '../store/slices/userSlice';

function Content() {
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch()

    useEffect(() => { dispatch(setData()) }, [])

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