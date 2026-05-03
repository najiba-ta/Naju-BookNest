import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
         <div className='container mx-auto'>
        <div className='mt-7 bg-cyan-800 py-2 px-4 w-full'>
                <Marquee pauseOnHover speed={50}>
                    
                    <span className="text-white mr-16 md:mr-[200px] text-sm md:text-xl font-semibold">
                        Special Discount On Membership
                    </span>

                    <span className="text-white mr-16 md:mr-[200px] text-sm md:text-xl font-semibold">
                        Join Our Reading Club Today!
                    </span>

                    <span className="text-white mr-16 md:mr-[200px] text-sm md:text-xl font-semibold">
                        Now Available The Complete Volumes Of J.S Finch
                    </span>

                </Marquee>
            </div>

        </div>
    );
};

export default BreakingNews;