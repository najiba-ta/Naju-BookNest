"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaSearchLocation, FaSearchPlus } from "react-icons/fa";

const AllBooksClient = ({ books }) => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filteredBooks = books.filter((book) => {
    const matchSearch = book.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchCategory =
        category === "All" || book.category === category;

    return matchSearch && matchCategory;
});
 return (
    <div className="container mx-auto my-7 flex gap-6">
            <div className="w-1/4 p-6 shadow-lg rounded-xl h-fit bg-white border border-gray-100">

            <h2 className="font-bold text-xl text-cyan-800 border-cyan-700 mb-6 border-b pb-2">
                Categories
            </h2>

            <div className="flex flex-col gap-3">

                <button className="btn btn-soft bg-cyan-800 text-white" onClick={() => setCategory("All")}>
                    All Books
                </button>

                <button className="btn btn-soft bg-cyan-800 text-white" onClick={() => setCategory("Story")}>
                    Story
                </button>

                <button className="btn btn-soft bg-cyan-800 text-white" onClick={() => setCategory("Tech")}>
                    Tech
                </button>

                <button className="btn btn-soft bg-cyan-800 text-white" onClick={() => setCategory("Science")}>
                    Science
                </button>

            </div>
        </div>

        <div className="w-3/4">

            {/* SEARCH */}
            <input
                type="text"
                placeholder="Search books..."
                className="input input-bordered mb-6 w-full"
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* BOOK GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">

                {filteredBooks.map((book) => (
                    <div key={book.id} className="card shadow-md p-2">

                        <Image
                            src={book.image_url}
                            width={400}
                            height={500}
                            alt={book.title}
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

        </div>

    </div>
);

};

export default AllBooksClient;