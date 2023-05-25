import { fetchCars } from "@utils";
import { CarProps, HomeProps } from "@types";
import { fuels, yearsOfProduction } from "@constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@components";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  // const allCars = [];

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  // className = "";
  return (
    <main>
      <Hero />

      <div className='mt-12 sm:px-16 px-6 py-4' id='discover'>
        <SearchBar />

        <div className='flex max-md:flex-col md:justify-between max-md:items-start w-full mt-16'>
          <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-400'>
            <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
            <p>Explore out cars you might like</p>
          </div>

          <div className='flex justify-start flex-wrap items-center gap-2 max-md:pt-10'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section className='flex flex-col w-full h-full'>
            <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
              {allCars?.map((car: CarProps) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='mt-16 flex justify-center items-center flex-col gap-2'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
