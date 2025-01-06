import React from 'react';
import { useForm } from 'react-hook-form';
import '../App.css';

const RegistrationPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Call API to register the user
    };

    return (
        <div className="container mt-5">
            <h2>Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" {...register('username', { required: true })} />
                    {errors.username && <p className="text-danger">Username is required</p>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" {...register('email', { required: true })} />
                    {errors.email && <p className="text-danger">Email is required</p>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="text" className="form-control" {...register('phone', { required: true })} />
                    {errors.phone && <p className="text-danger">Phone number is required</p>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" {...register('password', { required: true })} />
                    {errors.password && <p className="text-danger">Password is required</p>}
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default RegistrationPage;
