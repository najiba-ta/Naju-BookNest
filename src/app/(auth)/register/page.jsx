
'use client'

import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const RegisterPage = () => {
    const{register,handleSubmit,formState:{errors}} = useForm()
    const handleRegisterFunc = (data) =>{
        const {email,name,photo,password} = data;
        console.log(email,photo); 

    }
    return (
        <div className='container mx-auto bg-slate-100 min-h-[80vh] flex justify-center items-center p-20'>
            <div className='p-4 rounded-lg bg-white p-16'>
                <h2 className='text-4xl font-bold text-cyan-800 text-center mb-9'>Register Your Account</h2>
               <form onSubmit={handleSubmit(handleRegisterFunc)}>
                 <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl font-semibold">Your Name</legend>
                    <input type="text" className="input" placeholder="Enter your name" {...register("name",{required:"Name feild is required"})}/>
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </fieldset>
                 <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl font-semibold">Photo URL</legend>
                    <input type="text" className="input" placeholder="Enter your email" {...register("photo",{required:"Photo URL is required"})}/>
                    {errors.photo && <p className='text-red-600'>{errors.photo.message}</p>}
                </fieldset>
                 <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl font-semibold">Email Address</legend>
                    <input type="email" className="input" placeholder="Enter your email" {...register("email",{required:"Email is required"})}/>
                     {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl font-semibold">Password</legend>
                    <input name='password' type="password" className="input" placeholder="Enter your password" {...register("password",{required:"Password field is required"})} />
                    {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                </fieldset>
                <button className='btn btn-soft bg-cyan-700 text-white text-xl w-full mt-8'>Register <FaArrowAltCircleRight className='ml-2'/></button>
                <p className='text-lg text-gray-500 font-thin text-center mt-8'>OR</p>
                 <button className='btn btn-soft text-center w-full my-5'>SignUp With Google</button>

                 <p className='text-gray-500 text-center mt-6'>Already have an account? <Link href={'/login'} className='text-red-600'>Signin</Link></p>
               </form>
            </div>

        </div>
    );
};

export default RegisterPage;