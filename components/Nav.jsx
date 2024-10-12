'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const isUserLoggedIn = false;
  const [toggleDropDown, setToggleDropDown] = useState(false);

  return (
    <nav className='flex-between w-full mb-16'>
      <Link href='/' className='flex gap-2'>
        <Image
          src='/assets/images/logo.svg'
          alt='Promptopia logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Post
            </Link>
            <button type='button' className='outline_btn'>
              Sign Out
            </button>
            <Link href='/profile'>
              <Image
                src='/assets/images/logo.svg'
                width={37}
                height={37}
                alt='Profile image'
                className='rounded-full'
              />
            </Link>
          </div>
        ) : (
          <>
            <button type='button' className='black_btn'>
              Sing In
            </button>
          </>
        )}
      </div>
      {/* Mobil Navigation */}
      <div className='sm:hidden flex relative'>
        {isUserLoggedIn ? (
          <div className='flex'>
            <Image
              alt='Profile Pic'
              width={37}
              height={37}
              src='/assets/images/logo.svg'
              onClick={() => {
                setToggleDropDown((prev) => !prev);
              }}
            />

            {toggleDropDown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropDown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropDown(false)}
                >
                  Create New Prompt
                </Link>
                <button
                  type='button'
                  onClick={() => setToggleDropDown(false)}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button type='button' className='black_btn'>
              Sing In
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
