"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { SearchButtonProps } from "@types";
import SearchManufacturer from "./SearchManufacturer";
import { deleteSearchParams, updateSearchParams } from "@utils";

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
  const [manufacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  const handleSearch = () => {
    if (!manufacturer || !model) return alert("Please provide some input");

    if (manufacturer) {
      const newPathname = updateSearchParams("manufacturer", manufacturer);
      router.push(newPathname);
    } else {
      deleteSearchParams("manufacturer");
    }

    if (model) {
      const newPathname = updateSearchParams("model", model);
      router.push(newPathname);
    } else {
      deleteSearchParams("model");
    }
  };

  return (
    <form
      className='flex items-center justify-center max-sm:flex-col w-full relative mx-auto max-sm:gap-4 max-w-3xl'
      onSubmit={handleSearch}
    >
      <SearchManufacturer
        manufacturer={manufacturer}
        setManuFacturer={setManuFacturer}
      />
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
          value={model}
          onChange={(e) => setModel(e.target.value)}
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
