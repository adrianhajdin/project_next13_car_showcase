import CarCard from "@components/CarCard";
import Filter from "@components/Filter";
import { manufacturers, yearsOfProduction } from "@constants";

export default function Home() {
  return (
    <main>
      <div className='flex max-md:flex-col md:justify-between max-md:items-start w-full pt-16'>
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-400'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='flex justify-start flex-wrap items-center gap-2 max-md:pt-10'>
          <Filter title='Fuel Type' options={["Gas", "Electricity"]} />
          <Filter title='Manufacturer' options={manufacturers} />
          <Filter title='Year' options={yearsOfProduction} />
          {/* <button
            type='button'
            className='border-[1px] rounded-full p-[2px] w-[20px] h-[20px]'
            onClick={clearFilters}
          >
            <img src='/assets/icons/close.svg' alt='close' />
          </button> */}
        </div>
      </div>

      <div className='grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
        <CarCard
          model='sedan'
          make='toyota'
          mpg={30}
          transmission='a'
          year={2022}
          drive='front'
        />
      </div>
    </main>
  );
}
