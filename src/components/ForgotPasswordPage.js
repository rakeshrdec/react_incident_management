import React from 'react';
import { useForm } from 'react-hook-form';
import '../App.css';

const ForgotPasswordPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Forgot password data:', data);
        // Call API to send reset password link
        alert('Password reset link sent to your email.');
    };

    return (
        <div className="container mt-5">
            <div className="card mx-auto" style={{ maxWidth: '400px' }}>
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">Forgot Password</h3>
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
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
