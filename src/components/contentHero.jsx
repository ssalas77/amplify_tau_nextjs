/** @Content module */

import {
  BuildingOfficeIcon,
  GlobeAmericasIcon,
  KeyIcon,
  RocketLaunchIcon,
  ServerStackIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';
import { build } from '../assets/index';

const Content = () => {
  return (
    <div className='relative isolate overflow-hidden bg-transparent px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0'>
      <div className='absolute inset-0 -z-10 overflow-hidden'></div>
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='lg:max-w-lg'>
              <p className='text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-300'>
                Overview
              </p>
              <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-400 sm:text-4xl'>
                About us
              </h1>
              <i className='mt-6 text-xl font-jost font leading-8 text-gray-700 dark:text-gray-200'>
                “We provide scientific research and engineering support for
                directed energy, optics and space-related programs.”
              </i>
            </div>
          </div>
        </div>
        <div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
          <Image
            className='w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
            src={build}
            alt=''
          />
        </div>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='max-w-xl text-base leading-7 lg:max-w-lg'>
              <p className='text-gray-900 dark:text-gray-300'>
                Tau Technologies has extensive experience in optical sciences
                and engineering to include optical fabrication, test and
                performance assessment for telescopes, large optics, high power
                laser optical components, optical coatings and advanced
                pointing, tracking and active/passive imaging systems.
              </p>
              <br />
              <p className='text-gray-900 dark:text-gray-300'>
                This experience covers ground-based tactical optical systems,
                airborne platforms and satellite systems operating at UV,
                visible and infrared. Tau Technologies also maintains laboratory
                facilities for bread boarding, prototyping and testing optical
                systems and subsystems.
              </p>
              <ul
                role='list'
                className='mt-8 space-y-8 text-gray-600 dark:text-gray-300'
              >
                <li className='flex gap-x-3'>
                  <GlobeAmericasIcon
                    className='mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-300'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900 dark:text-gray-300'>
                      Albuquerque-based company (2005)
                      <br />
                    </strong>
                    • Over 50 employees primarily at Tau office in Albuquerque
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <KeyIcon
                    className='mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-300'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900 dark:text-gray-300'>
                      Core Values <br />
                    </strong>
                    • Intense focus on our customers <br />
                    • Pride in crafting high-quality products <br />
                    • Rapid delivery of prototype software <br />
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <RocketLaunchIcon
                    className='mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-300'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900 dark:text-gray-300'>
                      Historical focus
                      <br />
                    </strong>
                    • MS&A of satellite, electro-optical, and High Energy Laser
                    (HEL) systems
                    <br />
                    • One-of-a-kind optical and LIDAR hardware prototypes
                    <br />
                  </span>
                </li>
              </ul>
              <div className='lg:max-w-lg mb-10 mt-10'>
                <p className='text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-300'>
                  Facilities
                </p>
                <ul
                  role='list'
                  className='mt-8 space-y-8 text-gray-600 dark:text-gray-300'
                >
                  <li className='flex gap-x-3'>
                    <BuildingOfficeIcon
                      className='mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-300'
                      aria-hidden='true'
                    />
                    <span>
                      <strong className='font-semibold text-gray-900 dark:text-gray-300'>
                        Office
                        <br />
                      </strong>
                      • ~14,500 sq ft office space, ~600 sq ft laser, optics and
                      imaging lab
                      <br />
                      • Secure room for classified workstation
                      (Secret/Collateral)
                      <br />
                      • DCAA-approved accounting system; Gov’t property control
                      system
                      <br />
                      • Meets environmental laws and regulations of federal,
                      state of New Mexico, and local Governments.
                      <br />
                    </span>
                  </li>
                  <li className='flex gap-x-3'>
                    <ServerStackIcon
                      className='mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-300'
                      aria-hidden='true'
                    />
                    <span>
                      <strong className='font-semibold text-gray-900 dark:text-gray-300'>
                        Modeling Simulation & Analysis Development Environment
                        <br />
                      </strong>
                      • Agile development process
                      <br />
                      • Full Continuous Integration environment for code testing
                      <br />
                      • Gitlab team management
                      <br />
                      • Local and offsite AWS backup of Git repositories
                      <br />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
