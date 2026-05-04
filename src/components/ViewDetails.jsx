'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ViewDetailsButton = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);

        setTimeout(() => {
            router.push('/books');
        }, 1000);
    };

    return (
        <>
            <button
                onClick={handleClick}
                disabled={loading}
                className="btn btn-soft text-base md:text-xl bg-cyan-700 text-white py-4 md:py-4 px-5 flex items-center"
            >
                {loading ? "Loading..." : <>View Details </>}
            </button>

            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
                    <div className="relative flex flex-col items-center justify-center px-8 py-6 rounded-2xl 
                                    bg-white/10 border border-white/20 shadow-2xl backdrop-blur-xl">

                        <div className="absolute w-32 h-32 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>

                        <div className="relative animate-spin rounded-full h-14 w-14 border-[3px] 
                                        border-cyan-300 border-t-transparent"></div>

                        <p className="mt-4 text-cyan-100 text-sm tracking-wide animate-pulse">
                            Loading Details Page...
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default ViewDetailsButton;