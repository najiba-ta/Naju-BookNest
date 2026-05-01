import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='mt-7 bg-cyan-800 py-2 container mx-auto px-4'>
            <Marquee><span className="text-white mr-[200px] text-xl font-semibold">Spacial Discount On Membership</span>
                <span className="text-white mr-[200px] text-xl font-semibold">Join Our Reading Club Today!</span>
                <span className="text-white mr-[200px] text-xl font-semibold">Now Available The Complete Volumes Of J.S Finch</span> </Marquee>
        </div>
    );
};

export default BreakingNews;