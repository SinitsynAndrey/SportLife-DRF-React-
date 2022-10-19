import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registationAction } from '../store/actions/userActions'
import { useForm } from 'react-hook-form'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'


function Registration() {
    const user = useSelector(state => state.user.user)
    const errors = useSelector(state => state.user.errors);
    const { register } = useForm();
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    useEffect(() => { 
        if (user) {
            alert.success("Регистрация прошла успещно! Добро пожаловать!");
            navigate('/')
        }
    }, [user])

    const handleSubmit = (event) => {   
            event.preventDefault();
            const data = {
                username: event.target[0].value,
                email: event.target[1].value,
                password: event.target[2].value
            }
            dispatch(registationAction(data));
    }

    return (
       <form onSubmit={handleSubmit}>
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
                <label className="form-label">email</label>
                {errors.msg &&
                    <div className='error'>
                        {errors.msg.email}
                    </div>
                }
                <input {...register('email')}
                    type="email"
                    className="form-control"
                    aria-describedby="email"
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
            <div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form >
    )
}

export default Registration