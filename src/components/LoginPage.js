import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log('Login data:', data);
        // Call API to login user
        // On success:
        navigate('/incidents');
    };

    return (
        <div className="container mt-5">
            <div className="card mx-auto" style={{ maxWidth: '400px' }}>
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                {...register('email', { required: 'Email is required' })}
                            />
                            {errors.email && <p className="text-danger">{errors.email.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                {...register('password', { required: 'Password is required' })}
                            />
                            {errors.password && <p className="text-danger">{errors.password.message}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    <div className="mt-3 text-center">
                        <a href="/forgot-password" className="text-decoration-none">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
