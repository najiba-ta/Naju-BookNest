import React from 'react';
import logo from '../../../public/logo.png';
// import UserAvatar '../../../public/useravater.png'
import Image from 'next/image';
import Link from 'next/link';
import Navlink from './Navlink';

const Navbar = () => {
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
            <div>
               {/* <Image src={UserAvatar} width={50} height={50} alt='User Avatar'/> */}
               <button className='btn btn-soft bg-cyan-700 text-white'>
                <Link href={'/login'}>Login</Link>
               </button>
            </div>
        </div>
    );
};

export default Navbar;