'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowAltCircleRight, FaEye } from 'react-icons/fa';
import { LuEyeClosed } from 'react-icons/lu';
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "animate.css";

const RegisterPage = () => {
    const [loading, setLoading] = useState(false);
    const handleGoogleSignUp = async () => {
        setLoading(true);
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/login",
        });
    };

    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [isShowPassword, setIsShowPassword] = useState(false)
    const [emailError, setEmailError] = useState("");

    const handleRegisterFunc = async (data) => {

        setEmailError("");

        const { email, name, photo, password } = data;

        const { data: value, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image: photo,
            callbackURL: "/",
        });
        console.log(error);
        if (error) {
            const msg = error.message || "Registration failed!";

            toast.error(msg);

            if (
                msg.toLowerCase().includes("email") ||
                msg.toLowerCase().includes("exist")
            ) {
                setEmailError("User already exists, try another email");
            }

            return;
        }


        toast.success("Account created! Please login.");
        await authClient.signOut();
        setTimeout(() => {
            router.push("/login");
        }, 1000);
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

                <h2 className='text-2xl md:text-4xl font-bold text-white text-center mb-2'>
                    Create Your Account
                </h2>

                <p className='text-center text-sm md:text-base text-cyan-100/80 mb-6'>
                    Join Naju BookNest & start your reading journey
                </p>

                <form onSubmit={handleSubmit(handleRegisterFunc)} className='space-y-4'>


                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-white font-semibold">
                            Your Name
                        </legend>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="Enter your name"
                            {...register("name", { required: "Name feild is required" })}
                        />
                        {errors.name && <p className='text-red-400 text-sm'>{errors.name.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-white font-semibold">
                            Photo URL
                        </legend>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="Enter your photo url"
                            {...register("photo", { required: "Photo URL is required" })}
                        />
                        {errors.photo && <p className='text-red-400 text-sm'>{errors.photo.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-white font-semibold">
                            Email Address
                        </legend>

                        <input
                            type="email"
                            className="input w-full"
                            placeholder="Enter your email"
                            {...register("email", { required: "Email is required" })}
                        />

                        {emailError && (
                            <p className='text-red-400 text-sm mt-1'>
                                {emailError}
                            </p>
                        )}

                        {errors.email && (
                            <p className='text-red-400 text-sm'>
                                {errors.email.message}
                            </p>
                        )}
                    </fieldset>

                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend text-white font-semibold">
                            Password
                        </legend>

                        <input
                            type={isShowPassword ? "text" : "password"}
                            className="input w-full pr-10"
                            placeholder="Enter your password"
                            {...register("password", { required: "Password field is required" })}
                        />

                        <span
                            className='absolute right-3 top-4 cursor-pointer text-cyan-800'
                            onClick={() => setIsShowPassword(!isShowPassword)}
                        >
                            {isShowPassword ? <FaEye /> : <LuEyeClosed />}
                        </span>

                        {errors.password && (
                            <p className='text-red-400 text-sm'>
                                {errors.password.message}
                            </p>
                        )}
                    </fieldset>


                    <button className='btn bg-cyan-800 text-white w-full mt-6 flex items-center justify-center gap-2'>
                        Register <FaArrowAltCircleRight />
                    </button>

                    <p className='text-sm md:text-base text-cyan-100/80 text-center mt-4'>
                        OR
                    </p>

                    <button
                        onClick={handleGoogleSignUp}
                        type="button"
                        disabled={loading}
                        className='btn w-full'
                    >
                        {loading ? "Redirecting..." : "SignUp With Google"}
                    </button>

                    <p className='text-cyan-100/80 text-center mt-4'>
                        Already have an account?{" "}
                        <Link href={'/login'} className='text-cyan-300 font-semibold'>
                            Signin
                        </Link>
                    </p>

                </form>

            </div>

        </div>
    );
};

export default RegisterPage;