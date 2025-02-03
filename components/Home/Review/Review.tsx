import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import ReviewSlider from './ReviewSlider';

const Review = () => {
  return (
    <div className="pt-16 pb-16 bg-white "> 
    <div className="w-[80%] mx-auto">
        <SectionHeading heading="Our Client Reviews" />
        <div className="mt-14"></div>
        <ReviewSlider />
    </div>


    </div>
  );
};

export default Review