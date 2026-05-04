'use client'

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';

const ProfilePage = () => {
const userdata = authClient.useSession();
const user = userdata.data?.user;
console.log(user);

return(

    <div className='container mx-auto px-4'>
       {user && <div className='card shadow-2xl p-6 sm:p-10 md:p-16 
                                w-full sm:w-[80%] md:w-[60%] lg:w-[40%] 
                                mx-auto'>

      <Image 
        className='border border-cyan-700 rounded-full mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-30 md:h-30' 
        src={user?.image} 
        width={100} 
        height={100} 
        alt='user?.name'
      />

      <h2 className='text-xl sm:text-2xl font-bold text-center mt-6'>
        {user?.name}
      </h2>

      <h2 className='text-sm sm:text-base text-center'>
        {user?.email}
      </h2>

      <div className='flex justify-center'>
        <Link href={"/profile/update"}>
          <button className='btn btn-soft bg-cyan-700 text-white rounded-full mt-4 px-6'>
            Update Now
          </button>
        </Link>
      </div>

    </div>}
    </div>
)

}
export default ProfilePage;