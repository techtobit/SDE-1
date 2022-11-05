import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../../App.scss';

const SingUp = () => {
 const { register, handleSubmit, formState: { errors } } = useForm();
 const onSubmit = data => {
  console.log(data);
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
     <h2>Begin your journey!</h2>
     <p>Get started with the best platform for design  </p>
    </div>
    {/* singUp section  */}
    <div className="form pt-7 ">
     <form onSubmit={handleSubmit(onSubmit)} className="form-control">
      <ul className=''>
       {/* first & last name section  */}
       <li className='flex lg:flex-row md:flex-row flex-col'>
        <label className="label flex flex-col">
         <span className="label-text">First Name *</span>
         <input type="text" placeholder="Jhon"  {...register("firstName", {
          required: {
           value: true,
           message: "First name is required"
          },
          // pattern: /^[A-Za-z]+$/i
         })} className="input input-bordered pl-4 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
         <label label='label'>
          {errors.firstName?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.firstName.message}</span>}
         </label>
        </label>

        <label className="label flex flex-col lg:pl-4 md:4 pl-0">
         <span className="label-text">Last Name *</span>
         <input type="text" placeholder="Alex"  {...register("lastName", {
          required: {
           value: true,
           message: "Last name is required"
          },
         })} className="input input-bordered pl-4 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
         <label label='label'>
          {errors.lastName?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.lastName.message}</span>}
         </label>
        </label>
       </li>
       {/* email phone number section  */}
       <li className='flex  lg:flex-row md:flex-row flex-col'>
        <label className="label flex flex-col">
         <span className="label-text">Email *</span>
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
        </label>

        <label className="label flex flex-col lg:pl-4 md:pl-4 pl-0">
         <span className="label-text">Email *</span>
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
        </label>
       </li>

       {/* Password  section  */}
       <li className='flex'>
        <label className="label flex flex-col">
         <span className="label-text">Password *</span>
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
        </label>
       </li>
       <label className="label flex items-center align-middle">
        <input type="checkbox" class="w-4 accent-blue-200 cursor-pointer" />
        <p className='pl-2 text-sm'>By signing up, you agree to our <span className='text-blue-200'>User Agreement,</span> <span className='text-blue-200'>Terms of Service,</span> & <span className='text-blue-200'>Privacy Policy</span></p>

       </label>
       <div className="form-control mt-4 ">
        <input type='submit' value="Sign Up" className="login-btn h-14 btn-primary font-bold text-white-200 bg-blue-200 hover:bg-blue-100" />
       </div>
      </ul>
     </form>
     {/* {signInError} */}
     <div class="label pt-4 text-sm">
      <p className='label-text-alt'>Already have account? <Link to='/login' class="label-text-alt link link-hover underline text-neutral font-bold text-md">Login</Link></p>
     </div>
     {/* <div class="form-control mt-6">
            <button onClick={loginWithGoogle} class="btn btn-neutral" >login With Google</button>
          </div> */}
    </div>
   </div>
  </div>
 );
};

export default SingUp;