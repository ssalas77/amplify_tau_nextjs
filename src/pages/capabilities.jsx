import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
// import Image from 'next/image';
import Head from 'next/head';
import PageHero from '../components/pageHero';
import { roleIcon, roleIcon2, roleIcon3, roleIcon4 } from '../assets';

let capabilities = [
  {
    id: 1,
    name: 'Spatial-Temporal Control Applied to Atmospheric Adaptive Optics Phase',
    description:
      'As a Phase I SBIR, Tau Technologies addressed the feasibility of designing control algorithms that take advantage of spatial/temporal correlations in atmospheric and aero-optic phase aberrations, developing innovative and practical aero-optical beam control algorithms.',
    icon: roleIcon,
  },
  {
    id: 2,
    name: 'Fast Synthetic Scene Generation Phase I & Phase II',
    description:
      'Tau Technologies developed a novel scene generation approach to provide realistic, tactical and strategic, active and passive extended scenes for the development and testing of track algorithms. Tau successfully completed both a Phase I and a Phase II on this effort. This product is applicable to a broad range of DE and beam control technologies.',
    icon: roleIcon2,
  },
  {
    id: 3,
    name: 'Laser Propagation',
    description:
      'Tau Technologies developed a novel scene generation approach to provide realistic, tactical and strategic, active and passive extended scenes for the development and testing of track algorithms. Tau successfully completed both a Phase I and a Phase II on this effort. This product is applicable to a broad range of DE and beam control technologies.',
    icon: roleIcon3,
  },
  {
    id: 4,
    name: 'Detailed System and Mission Analyses',
    description:
      'Tau Technologies developed a novel scene generation approach to provide realistic, tactical and strategic, active and passive extended scenes for the development and testing of track algorithms. Tau successfully completed both a Phase I and a Phase II on this effort. This product is applicable to a broad range of DE and beam control technologies.',
    icon: roleIcon4,
  },
];

export default function Capabilities() {
  const [capabilityId, setCapabilityId] = useState(0);

  const handleClick = (capabilityId) => {
    setCapabilityId(capabilityId + -1);
    openModal(capabilities.id);
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
        <title>Capabilities - Tau Technologies</title>
        <meta
          name='description'
          content='Capabilities'
        />
      </Head>
      <PageHero
        heading='Capabilities'
        message=''
      />

      <div className=' py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <h2 className='text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-300'>
              Expertise
            </h2>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl'>
              Electro-Optical Systems Modeling, Simulation, and Analysis
            </p>
            <p className='mt-6 text-base leading-8 text-gray-600 dark:text-gray-300'>
              Tau EO Engineering and Physicist staff has over 100 years of
              combined electro-optical experience including laboratory
              experimentation and testing, integration, field tests, data
              analysis, modeling, and development and delivery of
              electro-optical systems from concepts into functional, fielded
              systems.
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
              {capabilities.map((capability) => (
                <div
                  key={capability.id}
                  className=' glass relative pl-16'
                >
                  <dt className='text-base m-2 font-semibold leading-7 text-gray-900 dark:text-gray-300'>
                    <div className='absolute left-0 top-0 ml-2 mt-2 flex h-6 w-6 items-center justify-center rounded-3xl bg-taublue/60 dark:bg-taublue/90'>
                      {/* <Image
                                                  isOpen={isOpen}
                                                  // role={role}
                                                  src={capability.icon}
                                                  className="h-6 w-6 text-white"
                                                  alt={capability.name}
                                                  height={"24"} width={"24"}
                                              /> */}
                    </div>
                    {capability.name}
                  </dt>
                  <dd className='mt-2 mr-2 mb-2 text-base leading-7 text-gray-600 dark:text-gray-300'>
                    {capability.description}
                  </dd>
                  <div className='relative mb-2 flex'>
                    {/* <button
                                              type="button"
                                              onClick={(openModal) => handleClick(capability.id)}
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
                                {capabilities[capabilityId].name}
                              </Dialog.Title>
                              <div className='mt-2'>
                                <p className='text-sm lg:text-lg text-gray-500 dark:text-gray-200'>
                                  {capabilities[capabilityId].description}
                                </p>
                              </div>
                              <div className='mt-2'>
                                <p className='text-sm lg:text-lg text-gray-500 dark:text-gray-200'>
                                  {capabilities[capabilityId].description}
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
          </div>
        </div>
      </div>
    </>
  );
}
