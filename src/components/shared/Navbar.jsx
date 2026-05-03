'use client'


import React, { useState } from 'react';
import logo from '../../../public/logo.png';
// import UserAvatar '../../../public/useravater.png'
import Image from 'next/image';
import Link from 'next/link';
import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    const [open, setOpen] = useState(false);
    console.log(user);
    return (
       <div className="sticky top-0 z-50 bg-white/20 backdrop-blur-md border-b border-white/30">
         <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
            <Image className='h-30' src={logo} height={30} width={220} alt='logo' />

            <ul className={`absolute md:static top-16 left-0 w-full md:w-auto 
flex flex-col md:flex-row items-center gap-6 p-6 md:p-0 
transition-all duration-300

${open ? "bg-white/30 backdrop-blur-md shadow-lg" : "hidden md:flex"}`}>
                <li>
                    <Navlink href={'/'} className={'text-cyan-800'}>Home</Navlink>
                </li>
                <li>
                    <Navlink className={'text-cyan-700'} href={'/books/id'}>All Books</Navlink>
                </li>
                <li>
                    <Navlink className={'text-cyan-700'} href={'/profile'}>My Profile</Navlink>
                </li>
            </ul>
            {isPending ? (<p><span className="loading loading-spinner text-primary loading-xl"></span></p>) : user ? (<div className=' flex gap-6 items-center'>
                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <h2>Hello, {user?.name}</h2>
                    {user.image && <Image className='bg-cyan-700 border rounded-full' src={user?.image} width={50} height={50} alt={user.name} />}
                </div>
                <button onClick={async () => await authClient.signOut()} className='btn btn-soft bg-cyan-700 text-white'>LogOut</button>
            </div>)
                : (
                    <button className='btn btn-soft bg-cyan-700 text-white'>
                        <Link href={'/login'}>Login</Link>
                    </button>)}
                     <div className='md:hidden flex items-center'>
                <button onClick={() => setOpen(!open)}>
                    {open ? <HiX size={28} /> : <HiMenu className='text-cyan-700' size={28} />}
                </button>
            </div>
        </div>
       </div>
    );
};

export default Navbar;