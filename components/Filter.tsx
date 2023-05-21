"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { deleteSearchParams, updateSearchParams } from "@utils";

interface FilterProps {
  title: string;
  options: string[];
}

const Filter = ({ title, options }: FilterProps) => {
  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    if (selected === target.value) {
      setSelected("");

      const newPathName = deleteSearchParams(title);
      router.push(newPathName);

      return;
    }

    setSelected(target.value);

    // add as params
    const newPathName = updateSearchParams(
      title.toLowerCase(),
      target.value.toLowerCase()
    );

    router.push(newPathName);
  };

  // close modal when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpenModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={modalRef}
      onClick={() => setOpenModal(!openModal)}
      className="flex flex-col items-center relative text-[14px] leading-[17px] justify-center cursor-pointer"
    >
      <div className="flex w-max justify-center items-center rounded-lg border-black-300 border-[1px]">
        <button
          type="button"
          className="py-3 px-4 flex justify-center items-center gap-2"
        >
          {title}
          <div
            className={`${
              !selected && "hidden"
            } w-[10px] h-[10px] bg-secondary-orange rounded-full`}
          />
        </button>
        <img
          src="/arrow-down.svg"
          className={`${openModal ? "pl-[18px] rotate-180" : "pr-[18px]"}`}
          alt="down arrow"
        />
      </div>

      {openModal && (
        <div
          className="flex flex-col absolute top-12 justify-start items-start w-full max-h-[200px] snap-y overflow-auto outline-0 border-[1px] border-black-300 bg-white-600 rounded-lg z-10 text-left"
          defaultValue="default"
        >
          {options?.map((option) => (
            <button
              key={option}
              type="button"
              value={option}
              className={`${
                selected === option ? "font-bold text-black" : "text-gray-600"
              } snap-center hover:bg-[#efefef] w-full p-2 text-left`}
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
