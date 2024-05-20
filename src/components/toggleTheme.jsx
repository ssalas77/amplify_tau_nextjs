/** @ToggleTheme module */

'use client';

import * as React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/16/solid';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function ToggleTheme() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [iconColor, setIconColor] = React.useState('#0b54a3');

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  React.useEffect(() => {
    const changeIcon = () => {
      if (window.scrollY >= 90) {
        setIconColor('white');
      } else {
        setIconColor('#0b54a3');
      }
    };
    window.addEventListener('scroll', changeIcon);
  }, []);

  React.useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=='
        width={36}
        height={36}
        sizes='36x36'
        alt='Loading Light/Dark Toggle'
        priority={false}
        title='Loading Light/Dark Toggle'
      />
    );

  if (theme === 'light') {
    return (
      <button
        aria-label='Toggle dark theme'
        type='button'
        onClick={changeTheme}
      >
        <MoonIcon
          style={{ color: `${iconColor}` }}
          className='rounded-sm h-6 w-6'
          // onClick={() => setTheme("dark")}
        />
      </button>
    );
  }

  if (theme === 'dark') {
    return (
      <button
        aria-label='Toggle light theme'
        type='button'
        onClick={changeTheme}
      >
        <SunIcon
          className='text-white rounded-sm h-6 w-6'
          // onClick={() => setTheme("light")}
        />
      </button>
    );
  }
}
