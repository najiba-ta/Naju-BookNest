import Link from "next/link";
import React from 'react';

const NotFounPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-lg max-w-md w-full">
        
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        
        <h2 className="text-2xl font-semibold mb-2">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 mb-6">
          Oops! The page youre looking for doesnt exist or has been moved.
        </p>

        <Link href="/">
          <button className="btn btn-primary px-6">
            Go Back Home
          </button>
        </Link>

      </div>
    </div>
    );
};

export default NotFounPage;
