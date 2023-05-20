"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface FilterProps {
  title: string;
  options: string[];
}

const Filter = ({ title, options }: FilterProps) => {
  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setSelected(target.value);

    // add as params
    updateSearchParams(target.value);
  };

  const updateSearchParams = (selectedItem: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    const updatedParams = new URLSearchParams(searchParams.toString());

    const lowercaseTitleName = title.toLowerCase();
    const lowercaseSelectedItem = selectedItem.toLowerCase();

    updatedParams.set(lowercaseTitleName, lowercaseSelectedItem);

    const newPathname = `${
      window.location.pathname
    }?${updatedParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <div
      onClick={() => setOpenModal(!openModal)}
      className='flex flex-col items-center relative text-[14px] leading-[17px] justify-center cursor-pointer'
    >
      <div className='flex w-max justify-center items-center rounded-lg border-black-300 border-[1px]'>
        <button
          type='button'
          className='py-3 px-4 flex justify-center items-center gap-2'
        >
          {title}
          <div
            className={`${
              !selected && "hidden"
            } w-[10px] h-[10px] bg-secondary-orange rounded-full`}
          />
        </button>
        <img
          src='/arrow-down.svg'
          className={`${openModal ? "pl-[18px] rotate-180" : "pr-[18px]"}`}
          alt='down arrow'
        />
      </div>

      {openModal && (
        <div
          className='flex flex-col absolute top-12 justify-start items-start w-full max-h-[200px] snap-y overflow-auto outline-0 border-[1px] border-black-300 bg-white-600 rounded-lg z-10'
          defaultValue='default'
        >
          {options?.map((option) => (
            <button
              key={option}
              type='button'
              value={option}
              className={`${
                selected === option && "font-bold"
              } snap-center hover:bg-[#efefef] w-full p-2`}
              onClick={(e) => handleClick(e)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
