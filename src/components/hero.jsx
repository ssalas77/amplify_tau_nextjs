/** @Hero module */

const Hero = () => {
  return (
    <div className='bg-fixed bg-no-repeat bg-center custom-img h-screen'>
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'
        ></div>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='mt-48 lg:mt-40 text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl'>
              Modeling Simulation & Analysis
            </h1>
            <p className='mt-6 text-xl lg:text-2xl leading-8 text-black dark:text-white'>
              Delivering rapid, accurate, and cost effective solutions since
              2004
            </p>
          </div>
        </div>
        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'
        ></div>
      </div>
    </div>
  );
};

export default Hero;
