import { getBooks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import "animate.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const BookCard = async() => {
    const books = await getBooks()
    console.log(books ,"Booking");
    return (
       <div>
         <div className="grid grid-cols-4 gap-6 container mx-auto my-7">
            {
               books.slice(0,4).map((book) => {
                    return <div className="mt-10 card shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300 p-2" key={book.id}>
                        <Image className="border rounded-lg animate__animated animate__zoomIn" src={book.image_url} height={800} width={400} alt={book.title}/>
                         <h2 className="text-xl text-center font-bold mt-3">{book.title}</h2>
                         <p className="text-lg font-light text-gray-600 text-center">-{book.author}</p>
                    </div>
                })
            }
        </div>
       <div className="text-center mt-8 mb-5"> 
                <Link href={'/allbook'}> <button className="btn btn-soft text-xl bg-cyan-700 text-white py-6 px-6 animate__animated animate__pulse animate__infinite">View Details <FaArrowUpRightFromSquare /></button></Link>
            </div>
       </div>
    );
};

export default BookCard;