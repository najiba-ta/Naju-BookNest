'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowAltCircleRight, FaEye } from 'react-icons/fa';
import { LuEyeClosed } from 'react-icons/lu';
import { toast } from "react-toastify";
import "animate.css";

const LoginPage = () => {

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [isShowPassword, setIsShowPassword] = useState(false)
    const [loginError, setLoginError] = useState("");

    const handleLoginFunc = async (data) => {

        setLoginError("");

        const { data: value, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            const msg = error.message?.toLowerCase();

            toast.error(error.message || "Login failed!");

            if (
                msg.includes("password") ||
                msg.includes("invalid") ||
                msg.includes("credentials") ||
                msg.includes("user")
            ) {
                setLoginError("Wrong password or email, please try again");
            }

            return;
        }

        toast.success("Login successful!");
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center px-4 py-10 overflow-hidden">

            
            <div className="absolute inset-0 animate__animated animate__zoomIn animate__slow">
                <img
                    src="/bg.jpg"
                    className="w-full h-full object-cover"
                    alt="bg"
                />
            </div>

            <div className="absolute inset-0 bg-black/60" />

            <div className='relative z-10 w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 p-6 md:p-10 rounded-lg shadow-2xl animate__animated animate__fadeInUp'>


                <h2 className='text-2xl md:text-4xl font-bold text-white text-center mb-2 animate__animated animate__fadeInDown'>
                    Welcome to Naju <span className='font-thin text-4xl text-cyan-600'>BookNest</span>
                </h2>

                <p className="text-center text-sm md:text-base text-cyan-100/80 mb-6">
                    Sign in to continue your reading journey
                </p>

                <form onSubmit={handleSubmit(handleLoginFunc)}>

                    <fieldset className="fieldset mb-4 animate__animated animate__fadeInUp">
                        <legend className="fieldset-legend text-white text-base md:text-lg font-semibold">
                            Email Address
                        </legend>

                        <input
                            type="email"
                            className="input w-full"
                            placeholder="Enter your email"
                            {...register("email", { required: true })}
                        />
                    </fieldset>

                    <fieldset className="fieldset mb-2 animate__animated animate__fadeInUp">
                        <legend className="fieldset-legend text-white text-base md:text-lg font-semibold">
                            Password
                        </legend>

                        <div className="relative">
                            <input
                                type={isShowPassword ? "text" : "password"}
                                className="input w-full pr-10"
                                placeholder="Enter your password"
                                {...register("password", { required: "password field is required" })}
                            />

                            <span
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-cyan-800"
                                onClick={() => setIsShowPassword(!isShowPassword)}
                            >
                                {isShowPassword ? <FaEye /> : <LuEyeClosed />}
                            </span>
                        </div>

                        {errors.password && (
                            <p className="text-red-400 text-sm mt-1 animate__animated animate__fadeIn">
                                {errors.password.message}
                            </p>
                        )}

                        {loginError && (
                            <p className="text-red-400 text-sm mt-1 animate__animated animate__shakeX">
                                {loginError}
                            </p>
                        )}
                    </fieldset>

                    <button className='btn bg-cyan-800 text-white w-full mt-6 flex items-center justify-center gap-2 animate__animated animate__pulse animate__infinite'>
                        Login <FaArrowAltCircleRight />
                    </button>

                    <p className='text-sm md:text-lg text-cyan-100/80 font-thin text-center mt-6'>
                        OR
                    </p>

                   
                    <button
                        onClick={handleGoogleSignIn}
                        type="button"
                        className='btn w-full my-4 animate__animated animate__fadeInUp'
                    >
                        SignIn With Google
                    </button>

                    <p className='text-cyan-100/80 text-center mt-6 text-sm md:text-base animate__animated animate__fadeInUp'>
                        Didnt have an account?{" "}
                        <Link href={'/register'} className='text-cyan-300 font-semibold'>
                            SignUp
                        </Link>
                    </p>

                </form>

            </div>

        </div>
    );
};

export default LoginPage;