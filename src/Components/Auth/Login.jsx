import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../../App.scss';


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
  }

  const loginWithGoogle = () => {

  }

  return (
    <div className='grid lg:grid-cols-3 login-section sections'>
      <div className="left-side">
        <div className="left-side-content lg:pl-16 pl-4 pt-20 pr-10">
          <h1 className='text-white-200'>Welcome to Rsquare.</h1>
          <p className='text-white-200 text-sm font-thin'>Lets get you all set up so start with your account and
            begin setting up your profile.
          </p>
        </div>
      </div>
      <div className="right-side lg:col-span-2 lg:pl-24 pl-4 pt-20">
        <div className="form-title">
          <h2>Welcome back!</h2>
          <p>Please Enter your details.</p>
        </div>
        <div className="form pt-7">
          <form onSubmit={handleSubmit(onSubmit)} className="form-control">
            <div className="flex flex-col items-start input">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Jhonathan@abc.com"  {...register("email", {
                required: {
                  value: true,
                  message: "Email is required"
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Email is not Valid"
                }
              })} className="input input-bordered pl-4 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />

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

              })} className="input input-bordered pl-4" />
              <label className='label'>
                {errors.password?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-600'>{errors.password.message}</span>}
              </label>
            </div>
            <label className="label form-optional flex items-center align-middle">
              <input type="checkbox" class="w-4 accent-blue-200 cursor-pointer" />
              <span className=' text-sm pl-2'>Remember me</span>
              <Link to='/resetPass' className="text-sm pl-[20%] text-blue-200 hover:text-blue-100 link-hover">Forgot password?</Link>
            </label>
            <div className="form-control mt-6 ">
              <input type='submit' value="login" className="login-btn h-14 btn-primary font-bold text-white-200 bg-blue-200 hover:bg-blue-100" />
            </div>
          </form>
          {/* {signInError} */}
          <div class="label pt-4 text-sm">
            <p className='label-text-alt'>Don't have an account? <Link to='/singup' class="label-text-alt link link-hover underline text-neutral font-bold text-md">Create an account</Link></p>
          </div>
          {/* <div class="form-control mt-6">
            <button onClick={loginWithGoogle} class="btn btn-neutral" >login With Google</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;