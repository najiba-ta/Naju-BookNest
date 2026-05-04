import { FaArrowCircleRight, FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Rahim Ahmed",
    text: "Amazing platform! Super easy to find books and borrow them instantly.",
    rating: 5,
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    text: "Clean UI and very smooth experience. Loved it!",
    rating: 4,
  },
  {
    id: 3,
    name: "Karim Hasan",
    text: "Borrowing system is fast and reliable.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-base-200 to-base-100 px-4">

      <h2 className="text-3xl md:text-6xl font-bold text-center mb-10 md:mb-14 text-cyan-800">
        What Our{" "}
        <span className="font-thin">Users Say</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">

        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white/80 backdrop-blur-md border border-gray-100 p-5 md:p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300"
          >

            <div className="flex mb-3 justify-center md:justify-start">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < review.rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>

            <p className="text-gray-600 italic leading-relaxed text-sm md:text-base text-center md:text-left">
              “{review.text}”
            </p>

            <h3 className="mt-5 font-semibold text-center md:text-right text-gray-800 text-sm md:text-base">
              — {review.name}
            </h3>

          </div>
        ))}

      </div>

      <div className="text-center mt-10 md:mt-12">
        <button className="btn text-white px-6 bg-cyan-700 flex items-center gap-2 mx-auto">
          View More Reviews <FaArrowCircleRight />
        </button>
      </div>

    </div>
  );
}