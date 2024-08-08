import React, { PropsWithChildren } from 'react';
// import { Text } from '@radix-ui/themes';

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;

  return (
    // <Text
    //   color='red'
    //   as='p'
    // >
    //   {children}
    // </Text>
    <p className='text-red-600 font-bold dark:text-red-500'>{children}</p>
  );
};

export default ErrorMessage;
