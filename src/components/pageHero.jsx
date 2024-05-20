/** @PageHero module */

import React from 'react';

const PageHero = ({ heading, message }) => {
  return (
    <div className='flex max-h-20 lg:max-h-72 pt-20 lg:pt-10 pb-20 lg:pb-10 mb-10 lg:mb-0'>
      <div className='grid grid-rows-4 gap-2 lg:gap-20 max-w-7xl p-5 '>
        <h2 className='row-start-3 col-span-4 text-left text-4xl font-semibold font-jost tracking-tight lg:text-5xl text-taublue dark:text-white'>
          {heading}
        </h2>
        <p className='row-start-4 col-span-4 text-left mt-10 mx-0 font-semibold text-base font-jost lg:text-center leading-8 lg:text-3xl lg:px-24'>
          {message}
        </p>
      </div>
    </div>
  );
};

export default PageHero;
