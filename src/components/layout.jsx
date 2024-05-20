/** @Layout module */

import * as React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { Providers } from './providers';

const Layout = ({ children }) => {
  return (
    <>
      <Providers>
        <Navbar />
        <div className='bg-transparent'>
          <div
            className='bg-hero bg-no-repeat bg-contain bg-fixed bg-center'
            id='bg'
          >
            {children}
          </div>
        </div>
        <Footer />
      </Providers>
    </>
  );
};

export default Layout;
