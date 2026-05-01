'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href,className,children}) => {
    const pathname = usePathname();
    console.log(pathname,'naju');

    const isActive = href === pathname
    return (
        <Link className={`${isActive ? " border-b-2 border-b-golden-500" : ""} ${className}`} href={href}>
            {children}
            
        </Link>
    );
};

export default Navlink;