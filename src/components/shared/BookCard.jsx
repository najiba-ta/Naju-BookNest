import { getBooks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import "animate.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import ViewAllButton from "../ViewAllButton";

const BookCard = async () => {
    const books = await getBooks();

    return (
        <div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto my-7 px-4">

                {books.slice(0, 4).map((book) => {
                    return (
                        <div
                            className="mt-6 card shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300 p-2"
                            key={book.id}
                        >
                            <Image
                                className="border rounded-lg animate__animated animate__zoomIn w-full h-auto"
                                src={book.image_url}
                                height={800}
                                width={400}
                                alt={book.title}
                            />

                            <h2 className="text-lg md:text-xl text-center font-bold mt-3">
                                {book.title}
                            </h2>

                            <p className="text-sm md:text-lg font-light text-gray-600 text-center">
                                -{book.author}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="text-center mt-8 mb-5 px-4">
               <ViewAllButton/>
            </div>

        </div>
    );
};

export default BookCard;