import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTokenAction } from '../store/actions/userActions'
import { useForm } from 'react-hook-form'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'



function LoginForm() {
    const errors = useSelector(state => state.user.errors);
    const { register,
        handleSubmit,
        formState: { isValid }
    } = useForm({mode: "onChange"});
    const dispatch = useDispatch();
    const alert = useAlert();
    
    useEffect(() => { 
        if (errors.msg) {
            console.log(errors)
            alert.error("Неверные данные!");
        }
    }, [errors])

    const onSubmit = (data) => {
        dispatch(getTokenAction(data));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Войти</h3>
            {errors.msg &&
                <div className='error'>
                    {errors.msg.non_field_errors}
                </div>
            }
            <div className="mb-3">
                <label className="form-label">Username</label>
                {errors.msg &&
                    <div className='error'>
                        {errors.msg.username}
                    </div>
                }
                <input {...register('username', {required: 'tr'})}
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
            <div>
                <button type="submit" disabled={!isValid} className="btn btn-primary">Submit</button>
                <Link to='/Registration' className='btn btn-secondary'>Registration</Link>
            </div>


        </form >
    )
}

export default LoginForm
