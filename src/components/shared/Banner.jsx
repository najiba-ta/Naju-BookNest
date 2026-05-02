import React from 'react';
import { GiBookCover } from 'react-icons/gi';
import BannerImg from '@/assest/Banner.jpg'
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import "animate.css";


const Banner = () => {
    return (
        <div className="flex justify-between container mx-auto items-center">

              <div>
                     <p className='flex gap-2 items-center border rounded-full px-4 py-2 border-gray-200'><GiBookCover className='text-cyan-700' /> Online Book Borrowing Platform</p>
                  <h2 className='font-bold text-6xl mt-6 text-cyan-800'>Find Your <span className='font-thin'>Next Read</span></h2>
                  <p className='mt-4 text-xl font-thin'>Explore thousands of book across different genres. <br />Borrow your favourites and enjoy reading anytime, anywhere</p>
                  <Link href={'/books/id'}><button className='btn btn-soft bg-cyan-700 text-white mt-4 animate__animated animate__pulse animate__infinite'>Browse Now<FaArrowRight/></button></Link>
              </div>
              <div className="animate__animated animate__fadeInUp">
               <Image src={BannerImg} height={600} width={600} alt='Banner image'/>
              </div>
        </div>
    );
};

export default Banner;