"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";

import { CustomFilterProps } from "@types";

export default function CustomFilter<T>({
  options,
  setFilter,
}: CustomFilterProps<T>) {
  const [menu, setMenu] = useState(options[0]); // State for storing the selected option

  return (
    <div className='w-fit'>
      <Listbox
        value={menu}
        onChange={(e) => {
          setMenu(e);
          setFilter(e.value as unknown as T); // Update the selected option in state
        }}
      >
        <div className='relative w-fit z-10'>
          {/* Button for the listbox */}
          <Listbox.Button className='custom-filter__btn'>
            <span className='block truncate'>{menu.title}</span>
            <Image
              src='/chevron-up-down.svg'
              width={20}
              height={20}
              className='ml-4 object-contain'
              alt='chevron_up-down'
            />
          </Listbox.Button>
          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options'>
              {/* Map over the options and display them as listbox options */}
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      {/* Display the option title */}
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
