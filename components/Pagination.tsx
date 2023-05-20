"use client";

import { useRouter } from "next/navigation";

interface PaginationProps {
  pageNumber: number;
}

const Pagination = ({ pageNumber = 1 }: PaginationProps) => {
  const router = useRouter();

  const handleNavigation = (type: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    const updatedParams = new URLSearchParams(searchParams.toString());
    const newLimit = (pageNumber + (type === "prev" ? -1 : 1)) * 10;

    updatedParams.set("limit", `${newLimit}`);

    const newPathname = `${
      window.location.pathname
    }?${updatedParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <div className='w-full flex justify-center items-center gap-5 mt-10'>
      <button
        className='border-none outline-none bg-blue-100 px-4 py-2 rounded-md'
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
        className='border-none outline-none bg-blue-100 px-4 py-2 rounded-md'
        onClick={() => handleNavigation("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
