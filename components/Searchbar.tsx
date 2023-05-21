"use client";

import React from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      elements: {
        model: { value: string };
        manufacturer: { value: string };
      };
    };

    const modelValue = target.elements.model.value;
    const manufacturerValue = target.elements.manufacturer.value;

    if (modelValue === "" && manufacturerValue === "")
      alert("Please provide some search parameters...");

    updateSearchParams(modelValue, manufacturerValue);
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    const updatedParams = new URLSearchParams(searchParams.toString());

    if (model) updatedParams.set("model", model);
    if (manufacturer) updatedParams.set("manufacturer", manufacturer);

    const newPathname = `${
      window.location.pathname
    }?${updatedParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form
      className='flex items-center justify-center lg:w-1/3 md:w-1/2 w-full relative mx-auto'
      onSubmit={handleSearch}
    >
      <div className='flex justify-start items-center relative'>
        <img
          src='/car-logo.svg'
          className='absolute w-[25px] h-[25px] ml-4'
          alt='car logo'
        />
        <input
          type='text'
          name='manufacturer'
          placeholder='BMW...'
          className='w-full h-[52px] pl-12 p-4 rounded-l-full bg-[rgba(59,60,152,0.03)] outline-none text-white-800 cursor-pointer'
        />
      </div>

      <div className='flex justify-start items-center relative'>
        <img
          src='/model-icon.png'
          className='absolute w-[25px] h-[25px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          placeholder='M8 sport...'
          className='w-full h-[52px] pl-12 p-4 bg-[rgba(59,60,152,0.03)] rounded-r-full outline-none text-white-800 cursor-pointer'
        />
      </div>

      <button type='submit' className='absolute right-5 w-[40px] h-[40px]'>
        <img src='/magnifying-glass.svg' alt='magnifying glass' />
      </button>
    </form>
  );
};

export default SearchBar;
