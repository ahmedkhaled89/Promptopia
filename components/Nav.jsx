'use client';
import Image from 'next/image';
import Link from 'next/link';
function Nav() {
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
    </nav>
  );
}

export default Nav;
