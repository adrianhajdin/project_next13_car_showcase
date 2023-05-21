import Link from "next/link";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <nav className='flex justify-between items-center w-full sm:px-16 px-6 py-4'>
    <Link href='/' className='flex justify-center items-center'>
      <img src='/logo.svg' alt='logo' />
    </Link>

    {/* <div className='flex-1 flex text-[14px] leading-[17px] font-medium justify-center items-center text-black-400 gap-6 max-lg:hidden'>
      <a href='/' className='font-bold'>
        Home
      </a>
      <a href='/'>Car Catalogue</a>
      <a href='/'>Contact Us</a>
      <a href='/'>Help</a>
    </div> */}

    <div className='flex gap-x-8 max-lg:gap-x-1 text-[14px] leading-[17px] font-extrabold text-primary-purple'>
      <CustomButton title='Register' btnType='button' />
      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='max-sm:hidden px-4 py-2 border-[rgba(59,60,152,0.4)] border-[1px] rounded-[16px]'
      />
    </div>
  </nav>
);

export default NavBar;
