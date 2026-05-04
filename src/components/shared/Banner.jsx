import React from 'react';
import { GiBookCover } from 'react-icons/gi';
import BannerImg from '@/assest/Banner.jpg'
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import "animate.css";

const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between container mx-auto items-center px-4 md:px-0 gap-10 md:gap-0">

              <div className="text-center md:text-left">
                     <p className='flex gap-3 items-center border rounded-full px-4 py-2 border-gray-200 w-fit md:w-80 text-cyan-700 mx-auto md:mx-0'>
                        <GiBookCover className='text-cyan-700' />
                        Online Book Borrowing Platform
                     </p>

                  <h2 className='font-bold text-3xl md:text-6xl mt-6 text-cyan-800'>
                      Find Your <span className='font-thin'>Next Read</span>
                  </h2>

                  <p className='mt-4 text-base md:text-xl font-thin'>
                      Explore thousands of book across different genres. <br className="hidden md:block" />
                      Borrow your favourites and enjoy reading anytime, anywhere
                  </p>

                  <Link href={'/allbook'}>
                    <button className='btn btn-soft bg-cyan-700 text-white mt-4 animate__animated animate__pulse animate__infinite flex items-center gap-2 mx-auto md:mx-0'>
                        Browse Now <FaArrowRight/>
                    </button>
                  </Link>
              </div>

              <div className="animate__animated animate__fadeInUp w-full md:w-auto flex justify-center">
               <Image 
                 src={BannerImg} 
                 height={600} 
                 width={600} 
                 alt='Banner image'
                 className="w-full md:w-[600px] h-auto"
               />
              </div>

        </div>
    );
};

export default Banner;