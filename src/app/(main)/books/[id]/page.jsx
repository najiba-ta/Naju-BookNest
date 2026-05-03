import { getBookById } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import BorrowButton from './BorrowButton';

const BooksDetailsPage = async ({ params }) => {
  const { id } = await params;
  const books = await getBookById(id);

  return (
    <div className='grid grid-cols-1 md:grid-cols-12 container mx-auto gap-8 md:gap-20 px-4 md:px-0'>

      {/* Image Section */}
      <div className='md:col-span-4 flex justify-center'>
        <div className='w-full max-w-sm md:max-w-none'>
          <Image
            src={books.image_url}
            width={700}
            height={900}
            alt={books.title}
            className='rounded-2xl w-full h-auto object-cover'
          />
        </div>
      </div>

      {/* Details Section */}
      <div className='md:col-span-8 card shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300 rounded-3xl p-5 md:p-10'>

        <h2 className='text-2xl md:text-4xl font-bold text-cyan-800'>
          {books.title}
        </h2>

        <h3 className='text-lg md:text-xl font-semibold text-gray-600 mt-3 md:mt-5'>
          Author ~ {books.author}
        </h3>

        <p className='mt-4 md:mt-6 font-bold text-xl md:text-2xl text-gray-700'>
          Description
        </p>

        <p className='mt-2 md:mt-3 text-gray-600 text-sm md:text-base'>
          {books.description}
        </p>

        <p className='font-semibold mt-4 text-lg md:text-xl'>
          Category :
          <span className='text-base md:text-lg font-thin text-gray-900 ml-2'>
            {books.category}
          </span>
        </p>

        <p className='text-lg md:text-xl font-bold text-gray-600'>
          Quantity :
          <span className='text-base md:text-lg font-thin text-gray-800 ml-2'>
            {books.available_quantity}
          </span>
        </p>

        <div className='mt-5'>
          <BorrowButton />
        </div>

      </div>
    </div>
  );
};

export default BooksDetailsPage;