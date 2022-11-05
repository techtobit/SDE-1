import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  }


  return (
    <div className='grid grid-cols-4'>
      <div className="left-side">
        <h1>Welcome to Rsquare.</h1>
        <p>Lets get you all set up so start with your account and
          begin setting up your profile.
        </p>
      </div>
      <div className="right-side col-span-3">
        <div className="form-title">
          <h2>Welcome back!</h2>
          <p>Please Enter your details.</p>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)} className="form-control">
            <div className="flex flex-col items-start">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Jhonathan@abc.com" {...register("email", {
                required: {
                  value: true,
                  message: "Email is required"
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Email is not Valid"
                }
              })} className="input input-bordered" />

              <label label='label'>
                {errors.email?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-600'>{errors.email.message}</span>}
              </label>
            </div>
            <div className="flex flex-col items-start">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input type="password" placeholder="password" {...register("password", {
                required: {
                  value: true,
                  message: "Password is required"
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 characters or longer"
                },

              })} className="input input-bordered" />
              <label className='label'>
                {errors.password?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-600'>{errors.password.message}</span>}
              </label>
            </div>

            <label className="label">
              <Link to='/resetPass' className="label-text-alt link link-hover">Forgot password?</Link>
            </label>
            <div className="form-control mt-6">
              <input type='submit' value="login" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;