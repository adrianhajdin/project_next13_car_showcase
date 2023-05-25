"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import CustomButton from "./CustomButton";

const NavBar = () => {
  const pathName = usePathname();

  return (
    <header className='w-full  absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src='/logo.svg'
            alt='logo'
            width={118}
            height={18}
            className='object-contain'
          />
        </Link>

        {/* <ul className='sm:flex hidden gap-7'>
          <Link href='/'>
            <li
              className={`${
                pathName === "/" ? "text-primary-blue" : "text-black-100"
              } text-[18px] font-medium`}
            >
              Rental Deals
            </li>
          </Link>
          <Link href='/my-favorites'>
            <li
              className={`${
                pathName === "/my-favorites"
                  ? "text-primary-blue"
                  : "text-black-100"
              } text-[18px] font-medium`}
            >
              Favorite Cars
            </li>
          </Link>
        </ul> */}

        <CustomButton
          title='Sign in'
          btnType='button'
          containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
        />
      </nav>
    </header>
  );
};

export default NavBar;
