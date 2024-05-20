'use client';

import { useState } from 'react';
import Head from 'next/head';
import PageHero from '../components/pageHero';
import {
//   roleIcon,
//   roleIcon2,
//   roleIcon3,
  roleIcon4,
} from '../assets/index';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

let roles = [
  {
    id: 1,
    name: 'Contract Administrator',
    description:
      'Tau Technologies, LLC, located in Albuquerque, New Mexico, has an immediate opening for a full-time Contract Administrator to help us successfully propose, negotiate, and perform prime contracts and subcontracts in support of Federal Government research and development activities.',
    descriptiontwo:
      'Tau is dedicated to engineering, and scientific research and development, especially as it relates to space systems, directed energy, and electro-optic systems.',
    descriptionthree:
      'We provide integrated hardware and software solutions, as well as complex modeling and simulation products.',
    descriptionfour:
      'Tau employees solve problems for our customers by delivering quality products in a people-friendly, positive work environment.',
    descriptionfive:
      'Tau offers competitive salaries and a comprehensive employee benefits package.',
    requirements: '•	Full understanding of contract administration duties.',
    requirementstwo:
      '•	An ability to lead cost and administrative proposal submissions that fully-comply with solicitation requirements.',
    requirementsthree:
      '•	General understanding of the Federal Acquisition Regulation (FAR) and a willingness to fully analyze contract terms and conditions and determine the appropriateness of FAR clauses.',
    requirementsfour:
      '•	Desire to build upon our established corporate subcontracting/consulting process and improve it over time by developing standard formats with appropriate FAR flow-down clauses.',
    requirementsfive:
      '•	Understanding of proposal pricing requirements and the ability to successfully provide proposal pricing traceability for government auditors.',
    requirementssix:
      '•	Analyze Proprietary Information Non-Disclosure Agreements (NDAs) to successfully protect Tau’s intellectual property.',
    requirementsseven:
      '•	Lead the prime contract and subcontract closeout processes.',
    requirementseight: '•	Help resolve billing and payment problems as needed.',
    requirementsnine:
      '•	Good customer interaction skills and an ability to effectively team with others.',
    requirementsten: '•	A desire to continuously grow professionally.',
    qualifications:
      '•	5+ years of experience in the role of a Contract Administrator',
    qualificationstwo:
      '•	Relevant degree from an accredited higher-learning institution',
    qualificationsthree:
      '•	Membership and involvement in, and/or a professional certification from, NCMA (or a similar professional organization) is considered a plus',
    icon: roleIcon4,
  },
];

export default function Careers() {

  const [roleId, setRoleId] = useState(0);

  const handleClick = (roleId) => {
    setRoleId(roleId + -1);
    openModal(roles.id);
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
        <title>Careers - Tau Technologies</title>
        <meta
          name='description'
          content='Careers'
        />
      </Head>
      <PageHero
        heading='Careers'
        message=''
      />

      <div className='py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <h2 className='text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-300'>
              How you can make a difference
            </h2>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl'>
              Open Roles
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:gap-y-16'>
              {/* {roles.map(([role, arr]) => (
               */}
              {roles.map((role) => (
                <div
                  key={role.id}
                  className='glass relative pl-16'
                >
                  <dt className='text-base m-2 font-semibold leading-7 text-gray-900 dark:text-gray-300'>
                    <div className='absolute left-0 top-0 ml-2 mt-2 flex h-10 w-10 items-center justify-center bg-transparent'>
                      {/* <div className="absolute left-0 top-0 ml-2 mt-2 flex h-6 w-6 items-center justify-center rounded-3xl bg-taublue/90"> */}
                      {/* <Image
                        // isOpen={isOpen}
                        // role={role}
                        // src={role.icon}
                        className='h-6 w-6 text-white'
                        // alt={role.name}
                        alt=''
                        height={'24'}
                        width={'24'}
                      /> */}
                    </div>
                    {role.name}
                  </dt>

                  <dd className='mt-2 mr-5 mb-2 text-base leading-7 text-gray-900 dark:text-gray-300'>
                    {role.description}
                  </dd>
                  <dd className='mt-1 mr-5 mb-2 text-base leading-7 text-gray-900 dark:text-gray-300'>
                    {role.descriptiontwo}
                  </dd>
                  <dd className='mt-1 mr-5 mb-2 text-base leading-7 text-gray-900 dark:text-gray-300'>
                    {role.descriptionthree}
                  </dd>
                  <dd className='mt-1 mr-5 mb-2 text-base leading-7 text-gray-900 dark:text-gray-300'>
                    {role.descriptionfour}
                  </dd>
                  <dd className='mt-1 mr-5 mb-2 text-base leading-7 text-gray-900 dark:text-gray-300'>
                    {role.descriptionfive}
                  </dd>
                  {/* <div className='relative mb-2 flex'>
                    <button
                      type='button'
                      onClick={openModal => handleClick(role.id)}
                      className='rounded-md bg-taublue px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'
                    >
                      Details
                    </button>
                  </div> */}

                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <div className='relative mb-4 mt-6 flex'>
                        <button
                          onClick={(openModal) => handleClick(role.id)}
                          className='rounded-md bg-taublue px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'
                          // className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
                        >
                          Details
                        </button>
                      </div>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className='bg-black/25 data-[state=open]:animate-overlayShow fixed inset-0' />
                      <Dialog.Content className='data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] lg:max-w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white dark:bg-zinc-500/95 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none lg:overflow-y-auto overflow-y-scroll'>
                        {/* <Dialog.Title className='text-mauve12 m-0 text-[17px] font-medium'> */}
                        <Dialog.Title className='text-black dark:text-white m-0 text-[17px] font-semibold'>
                          {roles[roleId].name}
                        </Dialog.Title>
                        <h1 className='my-5 font-medium'>
                          Requirements of position
                        </h1>
                        <Dialog.Description className='text-gray-900 dark:text-gray-300 mt-[5px] mb-1 text-[15px] leading-normal'>
                          {roles[roleId].requirements}
                        </Dialog.Description>
                        <Dialog.Description className='text-gray-900 dark:text-gray-300 mt-[5px] mb-1 text-[15px] leading-normal'>
                          {roles[roleId].requirementstwo}
                        </Dialog.Description>
                        <Dialog.Description className='text-gray-900 dark:text-gray-300 mt-[5px] mb-1 text-[15px] leading-normal'>
                          {roles[roleId].requirementsthree}
                        </Dialog.Description>
                        <Dialog.Description className='text-gray-900 dark:text-gray-300 mt-[5px] mb-1 text-[15px] leading-normal'>
                          {roles[roleId].requirementsfour}
                        </Dialog.Description>
                        <Dialog.Description className='text-gray-900 dark:text-gray-300 mt-[5px] mb-1 text-[15px] leading-normal'>
                          {roles[roleId].requirementsfive}
                        </Dialog.Description>
                        <Dialog.Description className='text-gray-900 dark:text-gray-300 mt-[5px] mb-1 text-[15px] leading-normal'>
                          {roles[roleId].requirementssix}
                        </Dialog.Description>
                        <Dialog.Description className='text-gray-900 dark:text-gray-300 mt-[5px] mb-1 text-[15px] leading-normal'>
                          {roles[roleId].requirementsseven}
                        </Dialog.Description>
                        <Dialog.Description className='text-gray-900 dark:text-gray-300 mt-[5px] mb-1 text-[15px] leading-normal'>
                          {roles[roleId].requirementseight}
                        </Dialog.Description>
                        <Dialog.Description className='text-gray-900 dark:text-gray-300 mt-[5px] mb-1 text-[15px] leading-normal'>
                          {roles[roleId].requirementsnine}
                        </Dialog.Description>
                        <Dialog.Description className='text-gray-900 dark:text-gray-300 mt-[5px] mb-1 text-[15px] leading-normal'>
                          {roles[roleId].requirementsten}
                        </Dialog.Description>

                        <h1 className='my-5 font-medium'>
                          Qualifications for position
                        </h1>
                        <Dialog.Description className='text-gray-900 dark:text-gray-300 mt-[5px] mb-1 text-[15px] leading-normal'>
                          {roles[roleId].qualifications}
                        </Dialog.Description>
                        <Dialog.Description className='text-gray-900 dark:text-gray-300 mt-[5px] mb-1 text-[15px] leading-normal'>
                          {roles[roleId].qualificationstwo}
                        </Dialog.Description>
                        <Dialog.Description className='text-gray-900 dark:text-gray-300 mt-[5px] mb-1 text-[15px] leading-normal'>
                          {roles[roleId].qualificationsthree}
                        </Dialog.Description>
                        {/* <Dialog.Description className='text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal'>
                          {roles[roleId].requirements}
                        </Dialog.Description> */}
                        <div className='mt-[25px] flex justify-end'>
                          <Dialog.Close asChild>
                            <button className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 dark:bg-taublue px-4 py-2 text-sm font-medium text-blue-900 dark:text-white hover:bg-blue-200 focus:shadow-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'>
                              <Link href='../apply'>Apply</Link>
                            </button>
                          </Dialog.Close>
                        </div>
                        <Dialog.Close asChild>
                          <button
                            className='text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none'
                            aria-label='Close'
                          >
                            <Cross2Icon />
                          </button>
                        </Dialog.Close>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                </div>
              ))}
            </dl>
            <div className='grid h-40 bg-transparent'></div>
          </div>
        </div>
      </div>
    </>
  );
}
