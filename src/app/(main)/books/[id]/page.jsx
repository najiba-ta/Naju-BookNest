


import { getBookById, getBooks } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import BorrowButton from './BorrowButton';

const BooksDetailsPage =async ({params}) => {
    const {id} = await params;
    const books= await getBookById(id)
    console.log(books);
    return (
        <div className='grid grid-cols-12 container mx-auto gap-20'>
            <div className='col-span-4'>
                <div>
                    <Image src={books.image_url} width={700} height={900} alt='books.title'/>
                </div>
            </div>
            <div className='col-span-8 card shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300 rounded-3xl p-10'>
                <h2 className='text-4xl font-bold text-cyan-800'>{books.title}</h2>
                <h3 className='text-xl font-semibold text-gray-600 mt-5'>Author~{books.author}</h3>
                <p className='mt-6 font-bold text-2xl text-gray-700'>Description</p>
                <p className='mt-3 text-gray-600'>
                    {books.description}
                </p>
                <p className='font-semibold mt-4 text-xl '>Category : <span className='text-lg font-thin text-gray-900'>{books.category}</span></p>
                <p className='text-xl font-bold text-gray-600 '>Quantity  : <span className='text-lg font-thin text-gray-800'>{books.available_quantity}</span></p>
                <BorrowButton/>
            </div>
        </div>
    );
};

export default BooksDetailsPage;