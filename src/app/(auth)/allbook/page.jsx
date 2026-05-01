import { getAllBooks } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import AllBooksClient from './AllBooksClient';


const AllBooksPage =async () => {
    const details = await getAllBooks()
    return <AllBooksClient books={details}/>
};

export default AllBooksPage;