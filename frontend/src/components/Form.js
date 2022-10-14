import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTokenAction, getUserAction } from '../store/actions/userActions'
import { useForm } from 'react-hook-form'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'


function Form() {
    const state_token = useSelector(state => state.user.token)
    const errors = useSelector(state => state.user.errors);
    const message = useSelector(state => state.user.message);
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    useEffect(() => {console.log(state_token)})

    const onSubmit = (data) => {
            dispatch(getTokenAction(data));
            if (state_token) {
                dispatch(getUserAction(data.username, state_token.token));
            }
            if (errors.msg) {
                alert.error("Неверные данные");
            }
            else {
                alert.success("Добро пожаловать");
                navigate('/');
            }
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
                    aria-describedby="Username"
                    />
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
                    className="form-control"
                    />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form >
    )
}

export default Form
