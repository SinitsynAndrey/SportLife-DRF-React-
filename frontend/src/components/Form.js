import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUserAction } from '../store/actions/usersActions'
import { useForm } from 'react-hook-form'


function Form() {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

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
                <input {...register('username')}
                    type="username"
                    className="form-control"
                    aria-describedby="Username" />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input {...register('password')}
                    type="password"
                    className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form >
    )
}

export default Form
