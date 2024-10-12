'use client';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  const isUserLogedIn = true;

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
        {isUserLogedIn ? (
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
    </nav>
  );
};

export default Nav;
