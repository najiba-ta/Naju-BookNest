"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AllBooksClient = ({ books }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
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

    const handleDetailsClick = (id) => {
        setLoading(true);

        setTimeout(() => {
            router.push(`/books/${id}`);
        }, 1000);
    };

    return (
        <div className="container mx-auto my-7 flex flex-col md:flex-row gap-6 px-4">

            {/* SIDEBAR */}
            <div className="w-full md:w-1/4 p-6 shadow-lg rounded-xl h-fit bg-white border border-gray-100">

                <h2 className="font-bold text-xl text-cyan-800 border-b pb-2 mb-6">
                    Categories
                </h2>

                <div className="flex flex-row md:flex-col flex-wrap gap-3">

                    <button className="btn btn-soft bg-cyan-800 text-white w-full md:w-auto" onClick={() => setCategory("All")}>
                        All Books
                    </button>

                    <button className="btn btn-soft bg-cyan-800 text-white w-full md:w-auto" onClick={() => setCategory("Story")}>
                        Story
                    </button>

                    <button className="btn btn-soft bg-cyan-800 text-white w-full md:w-auto" onClick={() => setCategory("Tech")}>
                        Tech
                    </button>

                    <button className="btn btn-soft bg-cyan-800 text-white w-full md:w-auto" onClick={() => setCategory("Science")}>
                        Science
                    </button>

                </div>
            </div>


            <div className="w-full md:w-3/4">

                <input
                    type="text"
                    placeholder="Search books..."
                    className="input input-bordered mb-6 w-full"
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {filteredBooks.map((book) => (
                        <div key={book.id} className="card shadow-md p-2 hover:shadow-2xl transition">

                            <Image
                                src={book.image_url}
                                width={400}
                                height={500}
                                alt={book.title}
                                className="w-full h-auto"
                            />

                            <h2 className="text-center font-bold mt-3 text-sm md:text-base">
                                {book.title}
                            </h2>

                            <Link href={`/books/${book.id}`}>
                                <button
                                    onClick={() => handleDetailsClick(book.id)}
                                    className="btn bg-cyan-800 text-white w-full mt-4"
                                >
                                    Details
                                </button>
                            </Link>

                        </div>
                    ))}

                </div>

            </div>
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">

                    <div className="relative flex flex-col items-center justify-center px-8 py-6 rounded-2xl 
                        bg-white/10 border border-white/20 shadow-2xl backdrop-blur-xl">

                        <div className="absolute w-32 h-32 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>

                        <div className="relative animate-spin rounded-full h-14 w-14 border-[3px] 
                            border-cyan-300 border-t-transparent"></div>

                        <p className="mt-4 text-cyan-100 text-sm tracking-wide animate-pulse">
                            Loading book details...
                        </p>

                    </div>

                </div>
            )}

        </div>
    );
};

export default AllBooksClient;