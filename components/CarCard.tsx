"use client";

import Image from "next/image";
import { useState } from "react";

import { addCarToLocalStorage, calculateCarRent } from "@utils";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";
import { usePathname } from "next/navigation";

// @ts-ignore
const CarCard = ({ car }) => {
  const pathName = usePathname();

  const [isLiked, setIsLiked] = useState(false);
  const { city_mpg, year, make, model, transmission, drive, mpg } = car;

  let [isOpen, setIsOpen] = useState(false);

  const imaginApiKey = process.env.NEXT_PUBLIC_IMAGIN_API_KEY;

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleFavorites() {
    setIsLiked(!isLiked);
    addCarToLocalStorage(car);
  }

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className='group flex flex-col p-6 justify-center items-start text-black-400 bg-light-white-100 rounded-[24px] hover:shadow-md'>
      <div className='w-full flex justify-between items-start gap-2'>
        <h2 className='text-[22px] leading-[26px] font-bold capitalize'>
          {make} {model}
        </h2>

        <Image
          src={
            pathName === "/my-favorites"
              ? "/heart-filled.svg"
              : !isLiked
              ? "/heart-outline.svg"
              : "/heart-filled.svg"
          }
          width={24}
          height={24}
          alt='heart'
          className='object-contain cursor-pointer mt-0.5'
          onClick={handleFavorites}
        />
      </div>

      <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>
          $
        </span>
        {carRent}
        <span className='self-end text-[14px] leading-[17px] font-medium'>
          /day
        </span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image
          src={`https://cdn.imagin.studio/getimage?customer=${imaginApiKey}&make=${make}&modelFamily=${
            model.split(" ")[0]
          }&zoomType=fullscreen&modelYear=${year}`}
          alt='car model'
          fill
          priority
          className='object-contain'
        />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              src='/steering-wheel.svg'
              width={20}
              height={20}
              alt='steering wheel'
            />
            <p className='text-[14px] leading-[17px]'>
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/tire.svg' width={20} height={20} alt='seat' />
            <p className='text-[14px] leading-[17px]'>{drive.toUpperCase()}</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/gas.svg' width={20} height={20} alt='seat' />
            <p className='text-[14px] leading-[17px]'>{mpg} MPG</p>
          </div>
        </div>

        <div className='hidden group-hover:flex absolute bottom-0 w-full z-10'>
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-lg bg-gradient-to-r from-[#5E60C1] from-[0.78%] to-[#7E80CD] to-[99.38%]'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={openModal}
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModal={closeModal} car={car} />
    </div>
  );
};

export default CarCard;
