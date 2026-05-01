"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaSearchLocation, FaSearchPlus } from "react-icons/fa";

const AllBooksClient = ({ books }) => {
    const [search, setSearch] = useState("");

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mx-auto my-7">

     {/* <div className="relative">
            <FaSearchPlus className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-900" /> */}

            <input
                type="text"
                placeholder="Search books..."
                className="input input-bordered mb-9 "
            />
        {/* </div> */}

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
            <div
                key={book.id}
                className="card shadow-md hover:shadow-2xl hover:-translate-y-1 transition p-2"
            >
                <Image
                    src={book.image_url}
                    width={400}
                    height={500}
                    alt={book.title}
                    className="rounded-lg"
                />

                <h2 className="text-center font-bold mt-3">
                    {book.title}
                </h2>

                <Link href={`/books/${book.id}`}>
                    <button className="btn bg-cyan-800 text-white w-full mt-4">
                        Details
                    </button>
                </Link>
            </div>
        ))}
    </div>

    </div >
  );
};

export default AllBooksClient;