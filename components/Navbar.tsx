import CustomButton from "./CustomButton";

const NavBar = () => (
  <nav className='flex justify-between sticky w-full'>
    <a href='/' className='flex justify-center items-center'>
      <img src='/logo.svg' alt='logo' />
    </a>

    <div className='flex text-[14px] leading-[17px] font-medium justify-center items-center text-black-400 gap-x-5 max-lg:hidden'>
      <a href='/' className='font-bold'>
        Home
      </a>
      <a href='/'>Car Catalogue</a>
      <a href='/'>Contact Us</a>
      <a href='/'>Help</a>
    </div>

    <div className='flex gap-x-8 max-lg:gap-x-1 text-[14px] leading-[17px] font-extrabold text-primary-purple'>
      <CustomButton title='Register' btnType='button' />
      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='px-8 py-4 border-[rgba(59,60,152,0.4)] border-[1px] rounded-[16px]'
      />
    </div>
  </nav>
);

export default NavBar;
