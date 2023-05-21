"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { FilterItemProps } from "@types";
import { deleteSearchParams, updateSearchParams } from "@utils";
import Image from "next/image";

const Filter = ({ title, options }: FilterItemProps) => {
  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.SyntheticEvent) => {
    // Extract the target element from the event
    const target = e.target as HTMLInputElement;

    // Check if the clicked option is already selected
    if (selected === target.value) {
      // Deselect the option by setting selected state to an empty string
      setSelected("");

      // Delete the corresponding search parameter from the URL
      const newPathName = deleteSearchParams(title);
      router.push(newPathName);

      return;
    }

    // Set the selected state to the value of the clicked option
    setSelected(target.value);

    // Convert the title to lowercase and add it as a search parameter in the URL
    const newPathName = updateSearchParams(
      title.toLowerCase(),
      target.value.toLowerCase()
    );

    router.push(newPathName);
  };

  // close modal when clicked outside
  useEffect(() => {
    // Function to handle the click outside the modal
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the modal reference exists and if the clicked element is outside the modal
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpenModal(false);
      }
    };

    // Add event listener for mousedown event to detect clicks outside the modal
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component is unmounted
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
      <div className="flex w-max justify-center items-center gap-3 px-4 py-2.5 rounded-lg border-black-300 border-[1px]">
        <button
          type="button"
          className="flex justify-center items-center gap-2"
        >
          {title}
          <div
            className={`${
              !selected && "hidden"
            } w-[10px] h-[10px] bg-secondary-orange rounded-full`}
          />
        </button>
        <Image
          src="/arrow-down.svg"
          width={10}
          height={10}
          className={`${openModal ? "rotate-180" : ""}`}
          alt="down arrow"
        />
      </div>

      {openModal && (
        <div
          className="flex flex-col absolute top-12 justify-start items-start max-h-[200px] snap-y overflow-auto outline-0 border-[1px] border-black-300 bg-white-600 rounded-lg z-10 text-left"
          defaultValue="default"
        >
          {options?.map((option) => (
            <button
              key={option}
              type="button"
              value={option}
              className={`${
                selected === option ? "font-bold text-black" : "text-gray-600"
              } w-full snap-center hover:bg-[#efefef] py-2 px-4 text-left`}
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
