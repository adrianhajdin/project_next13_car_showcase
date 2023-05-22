"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { SearchButtonProps } from "@types";

const SearchButton = ({ otherClasses, imgUrl, imgAlt }: SearchButtonProps) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={imgUrl || "/magnifying-glass.svg"}
      alt={imgAlt || "magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Extract the input elements from the event target
    const target = e.target as typeof e.target & {
      elements: {
        model: { value: string };
        manufacturer: { value: string };
      };
    };

    // Get the values of the model and manufacturer inputs
    const modelValue = target.elements.model.value;
    const manufacturerValue = target.elements.manufacturer.value;

    // Check if both modelValue and manufacturerValue are empty
    if (modelValue === "" && manufacturerValue === "")
      alert("Please provide some search parameters...");

    // update the URL search parameters
    updateSearchParams(modelValue, manufacturerValue);
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    if (model) searchParams.set("model", model);
    else searchParams.delete("model");

    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (manufacturer) searchParams.set("manufacturer", manufacturer);
    else searchParams.delete("manufacturer");

    // Generate the new pathname with the updated search parameters
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form
      className='flex items-center justify-center max-sm:flex-col w-full relative mx-auto max-sm:gap-4 max-w-3xl'
      onSubmit={handleSearch}
    >
      <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
        <Image
          src='/car-logo.svg'
          width={25}
          height={25}
          className='absolute ml-4'
          alt='car logo'
        />
        <input
          type='text'
          name='manufacturer'
          placeholder='BMW...'
          className='w-full h-[52px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none text-white-800 cursor-pointer'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>

      <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[25px] h-[25px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          placeholder='M8 sport...'
          className='w-full h-[52px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none text-white-800 cursor-pointer'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;
