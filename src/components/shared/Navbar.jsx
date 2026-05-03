'use client'

import React, { useState } from 'react';
import logo from '../../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    const [open, setOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 bg-white/20 backdrop-blur-md border-b border-white/30">
            <div className='container mx-auto px-4 py-3 flex justify-between items-center'>

                {/* Logo */}
                <Image src={logo} height={40} width={180} alt='logo' className='h-auto w-[140px] md:w-[180px]' />

                {/* Nav Links */}
                <ul className={`
                    absolute md:static top-16 left-0 w-full md:w-auto
                    flex flex-col md:flex-row items-center gap-6
                    p-6 md:p-0
                    transition-all duration-300

                    ${open ? "flex bg-transparent shadow-none backdrop-blur-none" : "hidden md:flex"}
                `}>

                    <li>
                        <Navlink href='/' className='text-cyan-800 bg-transparent hover:bg-transparent'>
                            Home
                        </Navlink>
                    </li>

                    <li>
                        <Navlink href='/allbook' className='text-cyan-700 bg-transparent hover:bg-transparent'>
                            All Books
                        </Navlink>
                    </li>

                    <li>
                        <Navlink href='/profile' className='text-cyan-700 bg-transparent hover:bg-transparent'>
                            My Profile
                        </Navlink>
                    </li>
                </ul>

                {/* Right Side */}
                <div className='flex items-center gap-3 md:gap-6'>

                    {isPending ? (
                        <span className="loading loading-spinner text-primary loading-md"></span>
                    ) : user ? (
                        <div className='flex items-center gap-3 md:gap-5'>

                            <div className='hidden sm:flex flex-col md:flex-row items-center gap-2 md:gap-4'>
                                <h2 className='text-sm md:text-base'>Hello, {user?.name}</h2>
                                {user.image && (
                                    <Image
                                        className='bg-cyan-700 border rounded-full'
                                        src={user.image}
                                        width={40}
                                        height={40}
                                        alt={user.name}
                                    />
                                )}
                            </div>

                            <button
                                onClick={async () => await authClient.signOut()}
                                className='btn btn-soft bg-cyan-700 text-white text-sm md:text-base px-3 md:px-5'
                            >
                                LogOut
                            </button>
                        </div>
                    ) : (
                        <Link href='/login'>
                            <button className='btn btn-soft bg-cyan-700 text-white text-sm md:text-base px-3 md:px-5'>
                                Login
                            </button>
                        </Link>
                    )}

                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <button onClick={() => setOpen(!open)}>
                            {open ? <HiX size={26} /> : <HiMenu className='text-cyan-700' size={26} />}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;