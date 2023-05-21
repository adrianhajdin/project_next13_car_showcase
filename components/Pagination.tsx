"use client";

import { useRouter } from "next/navigation";

import { PaginationProps } from "@types";
import { updateSearchParams } from "@utils";

const Pagination = ({ pageNumber = 1 }: PaginationProps) => {
  const router = useRouter();

  const handleNavigation = (type: string) => {
    const newLimit = (pageNumber + (type === "prev" ? -1 : 1)) * 10;

    const newPathname = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathname);
  };

  return (
    <div className='w-full flex justify-center items-center gap-5 mt-10'>
      <button
        className='border-none outline-none bg-primary-purple-100 px-4 py-2 rounded-md'
        onClick={() => {
          if (pageNumber > 1) {
            handleNavigation("prev");
          }
        }}
      >
        Prev
      </button>
      <p className='text-sm font-bold'>{pageNumber || 1}</p>
      <button
        className='border-none outline-none bg-primary-purple-100 px-4 py-2 rounded-md'
        onClick={() => handleNavigation("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
