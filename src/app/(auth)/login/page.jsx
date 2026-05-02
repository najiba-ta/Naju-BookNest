
'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowAltCircleRight, FaEye } from 'react-icons/fa';
import { LuEyeClosed } from 'react-icons/lu';

const LoginPage =() => {

    const handleGoogleSignIn = async () => {
       const data = await authClient.signIn.social({
    provider: "google",
  });
    }
    const { register, handleSubmit, formState: { errors } } = useForm()

    const [isShowPassword,setIsShowPassword] = useState(false)
    const handleLoginFunc = async (data) => {
        const { data:value, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });


    }
    return (
        <div className='container mx-auto bg-slate-100 min-h-[80vh] flex justify-center items-center p-16'>
            <div className='p-4 rounded-lg bg-white p-16'>
                <h2 className='text-4xl font-bold text-cyan-800 text-center mb-9'>Login Your Account</h2>
                <form onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl font-semibold">Email Address</legend>
                        <input type="email" className="input" placeholder="Enter your email" {...register("email", { required: true })} />
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend text-xl font-semibold">Password</legend>
                        <input name='password' type={isShowPassword ? "text" : "password"} className="input" placeholder="Enter your password" {...register("password", { required: "password field is required" })} />
                        <span  className=' absolute right-3 top-4 ' onClick={() => setIsShowPassword(!isShowPassword)}>
                           {isShowPassword ? <FaEye/> : <LuEyeClosed />}
                        </span>
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </fieldset>
                    <button className='btn btn-soft bg-cyan-700 text-white text-xl w-full mt-8'>Login <FaArrowAltCircleRight className='ml-2' /></button>
                    <p className='text-lg text-gray-500 font-thin text-center mt-8'>OR</p>
                    <button onClick={handleGoogleSignIn} className='btn btn-soft text-center w-full my-5'>SignIn With Google</button>

                    <p className='text-gray-500 text-center mt-6'>Didn't have an account?? <Link href={'/register'} className='text-red-600'>SignUp</Link></p>
                </form>
            </div>

        </div>
    );
};

export default LoginPage;