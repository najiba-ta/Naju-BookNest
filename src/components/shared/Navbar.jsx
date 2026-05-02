'use client'


import React from 'react';
import logo from '../../../public/logo.png';
// import UserAvatar '../../../public/useravater.png'
import Image from 'next/image';
import Link from 'next/link';
import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session,isPending } = authClient.useSession()
    const user = session?.user;
    console.log(user);
    return (
        <div className='flex justify-between items-center container mx-auto px-6'>
            <div>
                <Image src={logo} height={20} width={250} alt='logo' />
            </div>
            <div>
                <ul className='flex gap-6 justify-between'>
                    <li>
                        <Navlink href={'/'}>Home</Navlink>
                    </li>
                    <li>
                        <Navlink href={'books/id'}className={'text-purple-800'}>All Books</Navlink>
                    </li>
                    <li>
                        <Navlink href={'profile'}>My Profile</Navlink>
                    </li>
                </ul>

            </div>
            {isPending ? (<p><span className="loading loading-spinner text-primary loading-xl"></span></p>) : user ? (<div className=' flex gap-6 items-center'>
                <h2>Hello, {user?.name}</h2>
                <div>
                    {user.image && <Image className='bg-cyan-700 border rounded-full' src={user?.image} width={50} height={50} alt={user.name}/>}
                </div>
             <button onClick={async() => await authClient.signOut()} className='btn btn-soft bg-cyan-700 text-white'>LogOut</button>
            </div>)
            : (
               <button className='btn btn-soft bg-cyan-700 text-white'>
                <Link href={'/login'}>Login</Link>
               </button>)}
        </div>
    );
};

export default Navbar;