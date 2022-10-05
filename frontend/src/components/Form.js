import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUserAction } from '../store/actions/usersActions'
import { useForm } from 'react-hook-form'
import { useAlert } from 'react-alert'


function Form() {

    const errors = useSelector(state => state.users.errors);
    const message = useSelector(state => state.users.message);
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const alert = useAlert()

    useEffect(() => {
        if (errors.msg) {
            alert.error("Неверная регистрация");
        }
    }, [errors])

    useEffect(() => {
        if (message) {
            alert.success(`${message}`);
        }
    }, [message])

    function onSubmit(data) {
        dispatch(addUserAction({
            'username': data.username,
            'password': data.password
        }
        ))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label">Username</label>
                {errors.msg &&
                    <div className='error'>
                        {errors.msg.username}
                    </div>
                }
                <input {...register('username')}
                    type="username"
                    className="form-control"
                    aria-describedby="Username" />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                {errors.msg &&
                    <div className='error'>
                        {errors.msg.password}
                    </div>
                }
                <input {...register('password')}
                    type="password"
                    className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form >
    )
}

export default Form
