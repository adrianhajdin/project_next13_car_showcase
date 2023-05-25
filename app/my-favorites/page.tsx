"use client";

import { CarCard, CustomFilter } from "@components";
import { fuels, yearsOfProduction } from "@constants";
import { HomeProps } from "@types";
import { getCarsFromLocalStorage } from "@utils";
import Link from "next/link";

const MyFavorites = ({ searchParams }: HomeProps) => {
  const allCars = getCarsFromLocalStorage(searchParams.fuel, searchParams.year);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='sm:px-16 px-6 pt-32 pb-4'>
      <div className='flex max-md:flex-col md:justify-between max-md:items-start w-full mt-16'>
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-400'>
          <h1 className='text-4xl font-extrabold'>Favorite Cars</h1>
          <p>Explore out cars you have liked!</p>
        </div>

        <div className='flex justify-start flex-wrap items-center gap-2 max-md:pt-10'>
          <CustomFilter title='fuel' options={fuels} />
          <CustomFilter title='year' options={yearsOfProduction} />
        </div>
      </div>

      {!isDataEmpty ? (
        <section className='flex flex-col w-full h-full'>
          <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
            {allCars?.map((car, index) => (
              <CarCard car={{ ...car, id: `car-${index}` }} />
            ))}
          </div>
        </section>
      ) : (
        <div className='mt-16 flex justify-center items-center flex-col gap-2'>
          <h2 className='text-black text-xl font-bold'>
            Oops, you have no favorite cars
          </h2>
          <p>
            Go{" "}
            <Link href='/' className='font-bold text-secondary-orange'>
              Home
            </Link>{" "}
            to browse & select your favorite cars
          </p>
        </div>
      )}
    </main>
  );
};

export default MyFavorites;
