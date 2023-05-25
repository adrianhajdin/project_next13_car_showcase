"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import CustomButton from "./CustomButton";

const NavBar = () => {
  const pathName = usePathname();

  return (
    <nav className='absolute flex justify-between items-center w-full sm:px-16 px-6 py-4 bg-transparent z-10'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>

      <ul className='sm:flex hidden gap-7'>
        <Link href='/'>
          <li
            className={`${
              pathName === "/" ? "text-primary-purple" : ""
            } text-[18px] font-medium`}
          >
            Rental Deals
          </li>
        </Link>
        <Link href='/my-favorites'>
          <li
            className={`${
              pathName === "/my-favorites" ? "text-primary-purple" : ""
            } text-[18px] font-medium`}
          >
            Favorite Cars
          </li>
        </Link>
      </ul>

      <div className='flex text-base text-primary-purple'>
        <CustomButton
          title='Sign in'
          btnType='button'
          containerStyles='rounded-full bg-white text-primary-purple'
        />
      </div>
    </nav>
  );
};

export default NavBar;
