'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({ href, className, children }) => {
    const pathname = usePathname();

    const isActive = pathname === href
    return (
        <Link
            href={href}
           className={`${
  isActive
    ? "bg-cyan-800 text-white border border-transparent"
    : "bg-white/10 text-cyan-700 hover:bg-white/20 border border-gray-300"
} backdrop-blur-md px-5 py-2 rounded-xl transition
 ${className}`} 
        >
            {children}
        </Link>
    );
};

export default Navlink;