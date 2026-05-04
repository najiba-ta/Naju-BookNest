import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content mt-20">

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4 hover:text-cyan-800 transition">
           Naju BookNest
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed">
            A modern online book borrowing platform where you can explore,
            borrow, and enjoy thousands of books digitally with ease.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 hover:text-cyan-800 transition">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2 text-sm">
            <Link href="/" className="hover:text-cyan-800 transition">
              Home
            </Link>
            <Link href="/all-books" className="hover:text-cyan-800 transition">
              All Books
            </Link>
            <Link href="/profile" className="hover:text-cyan-800 transition">
              My Profile
            </Link>
            <Link href="/login" className="hover:text-cyan-800 transition">
              Login
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 hover:text-cyan-800 transition">
            Contact Us
          </h3>

          <p className="text-sm text-gray-500 mb-4">
            Email: support@najubooknest.com
          </p>

          <div className="flex gap-5 text-xl">
            <FaFacebook className="cursor-pointer hover:text-blue-500 hover:scale-110 transition" />
            <FaTwitter className="cursor-pointer hover:text-sky-400 hover:scale-110 transition" />
            <FaInstagram className="cursor-pointer hover:text-pink-500 hover:scale-110 transition" />
            <FaGithub className="cursor-pointer hover:text-gray-700 hover:scale-110 transition" />
          </div>
        </div>

      </div>

      <div className="text-center py-4 border-t border-gray-300 text-sm text-gray-500">
        © {new Date().getFullYear()} Naju BookNest. All rights reserved.
      </div>

    </footer>
  );
}