import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <nav className="flex justify-between items-center w-full sm:px-16 px-6 py-4">
    <Link href="/" className="flex justify-center items-center">
      <Image
        src="/logo.svg"
        alt="logo"
        width={118}
        height={18}
        className="object-contain"
      />
    </Link>

    <div className="flex text-[14px] leading-[17px] font-extrabold text-primary-purple">
      <CustomButton title="Register" btnType="button" />
      <CustomButton
        title="Sign in"
        btnType="button"
        containerStyles="max-sm:hidden px-4 py-2 border-primary-purple border-[1px] rounded-xl hover:bg-primary-purple hover:text-white"
      />
    </div>
  </nav>
);

export default NavBar;
