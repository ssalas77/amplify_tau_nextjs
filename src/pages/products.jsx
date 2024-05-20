import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import PageHero from '../components/pageHero';
import { roleIcon, roleIcon2, roleIcon3, roleIcon4 } from '../assets';
import { AFRL, DOD, SNL } from '../assets';

let products = [
  {
    id: 1,
    name: 'SVST - Satellite Visualization & Signature Tool',
    description:
      'Tau Technologies develops and maintains SVST, a Government-owned simulation tool which provides a full suite of EO analysis capability. SVST can render multiple model formats and simulate realistic sensor imagery for UV, visible, NIR through LWIR. infrared wavelenghts, with a variety of novel and useful data display options.',
    icon: roleIcon,
  },
  {
    id: 2,
    name: 'HELSEEM - High Energy Laser System End-to-End Model',
    description:
      'Funded by HEL-JTO and managed by AFRL, HELSEEM is a framework which incorporates the Dynamic Aimpoint Laser Engagement (DALE) module, the High Energy Laser Consolidated Modeling Engagement Simulation (HELCOMES), the Time-domain Analysis Simulation for Advanced Tracking (TASAT), and the Atmospheric Compensation Simulation (ACS).',
    icon: roleIcon2,
  },
  {
    id: 3,
    name: 'DALE - Dynamic Aimpoint Laser Engagement',
    description:
      'Funded by HEL-JTO and managed by AFRL, the Dynamic Aimpoint Laser Engagement (DALE) provides optimal aimpoint selection for complex targets, considering scenario geometry, target vulnerability, and HEL power effects. DALE is benchmarked against expert vulnerability analysis.',
    icon: roleIcon3,
  },
  {
    id: 4,
    name: 'FaST - Fast Scene-generation Tools',
    description:
      'The FaST project leverages the speed of a Graphical Processing Unit (GPU) to simulate realistic sensor output at realtime frame rates. It is used as part of a closed-loop control system simulation to evaluate tracking and image processing algorithms.',
    icon: roleIcon4,
  },
  {
    id: 5,
    name: 'GPU-based Robust Pose Estimation',
    description:
      'As part of a two-year HEL-JTO project, Tau Technologies delivered a robust pose estimation algorithm which finds the optimal match between multiple modes of measure object signatures and the corresponding model-based simulated signatures. GRPE produces a 3D model pose estimate at frame rates of 10 Hz or faster.',
    icon: roleIcon,
  },
  {
    id: 6,
    name: 'BRDF - Dynamic Bidirectional Reflectivity Distribution Function',
    description:
      'In support of the Directed Energy Test, Science & Technology program (DET S&T), Tau Technologies developed a fully polarized, anisotropic, wavelength and temperature dependent Bidirectional Reflectance Distribution Function (BRDF) model. The BRDF is a critical component in predicting target signatures and reflected laser energy. Tau employs this model to support a wide range of active and passive applications.',
    icon: roleIcon2,
  },
];

export default function Product() {
  const [productId, setProductId] = useState(0);

  const handleClick = (productId) => {
    setProductId(productId + -1);
    openModal(products.id);
  };

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Head>
        <title>Products - Tau Technologies</title>
        <meta
          name='description'
          content='Products'
        />
      </Head>
      <PageHero
        heading='Products'
        message=''
      />

      <div className=' py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <h2 className='text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-300'>
              What we offer
            </h2>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl'>
              Current Products
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
              {products.map((product) => (
                <div
                  key={product.id}
                  className=' glass relative pl-16'
                >
                  <dt className='text-base m-2 font-semibold leading-7 text-gray-900 dark:text-gray-300'>
                    {/* <div className="absolute left-0 top-0 ml-2 mt-2 flex h-10 w-10 items-center justify-center rounded-lg bg-taublue"> */}
                    <div className='absolute left-0 top-0 ml-2 mt-2 flex h-6 w-6 items-center justify-center rounded-3xl bg-taublue/60 dark:bg-taublue/90'>
                      {/* <Image
                                                  isOpen={isOpen}
                                                  // role={role}
                                                  src={product.icon}
                                                  className="h-6 w-6 text-white"
                                                  alt={product.name}
                                                  height={"24"} width={"24"}
                                              /> */}
                    </div>
                    {product.name}
                  </dt>
                  <dd className='mt-2 mr-2 mb-2 text-base leading-7 text-gray-600 dark:text-gray-300'>
                    {product.description}
                  </dd>
                  <div className='relative mb-2 flex'>
                    {/* <button
                                              type="button"
                                              onClick={(openModal) => handleClick(product.id)}
                                              className="rounded-md bg-taublue px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                                          >
                                              Details
                                          </button> */}
                  </div>

                  <Transition
                    appear
                    show={isOpen}
                    as={Fragment}
                  >
                    <Dialog
                      as='div'
                      className='relative z-10'
                      onClose={closeModal}
                    >
                      <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                      >
                        <div className='fixed inset-0 bg-black/25' />
                      </Transition.Child>

                      <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                          <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                          >
                            <Dialog.Panel className='w-full max-w-md lg:max-w-6xl md:max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                              <Dialog.Title
                                as='h3'
                                className='text-lg font-medium leading-6 text-gray-900 dark:text-gray-300'
                              >
                                {products[productId].name}
                              </Dialog.Title>
                              <div className='mt-2'>
                                <p className='text-sm lg:text-lg text-gray-500 dark:text-gray-200'>
                                  {products[productId].description}
                                </p>
                              </div>
                              <div className='mt-2'>
                                <p className='text-sm lg:text-lg text-gray-500 dark:text-gray-200'>
                                  {products[productId].description}
                                </p>
                              </div>
                              <div className='mt-4'>
                                <button
                                  type='button'
                                  className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                                  onClick={closeModal}
                                >
                                  Close
                                </button>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition>
                </div>
              ))}
            </dl>

            {/* <div className="grid h-40 bg-transparent"></div> */}

            <div className='grid h-40 bg-transparent'></div>

            {/* CLIENTS */}
            <div className=' grid grid-cols-3 mx-auto gap-x-8 gap-y-10 rounded-box'>
              <div className=''>
                <Image
                  className=' max-h-24 w-full object-contain'
                  src={AFRL}
                  alt='Air Force'
                />
              </div>
              <div className=''>
                <Image
                  className=' max-h-24 w-full object-contain'
                  src={DOD}
                  alt='Dept Defense'
                />
              </div>
              <div className=''>
                <Image
                  className=' max-h-24 w-full object-contain'
                  src={SNL}
                  alt='Sandia Labs'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
