/** @Footer module */

import * as React from 'react';
import Link from 'next/link';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';

const Footer = () => {
  return (
    <div className="fixed bottom-0 bg-taublue dark:bg-[#06172A] text-indigo-50 p-2 w-screen z-50">
      <ul className='flex flex-wrap justify-center gap-3 md:gap-8 lg:gap-12'>
        <li className=''>
          <Link
            className='font-medium text-gray-300 no-underline hover:underline hover:text-white'
            href='tel:+1-505-244-1222'
          >
            505.244.1222
          </Link>
        </li>
        <p className='text-gray-300'>|</p>
        <li>
          <Link
            className='font-medium text-gray-300 no-underline hover:underline hover:text-white'
            href='mailto:info@tautechnologies.com'
          >
            info@tautechnologies.com
          </Link>
        </li>
        <p className='text-gray-300'>|</p>
        <li className=''>
          <Link
            className=''
            href='https://www.linkedin.com/company/tau-technologies-llc'
          >
            <LinkedInLogoIcon className='h-6 w-6' />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
