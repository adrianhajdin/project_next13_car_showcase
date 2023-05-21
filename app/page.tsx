import { fetchCars } from "@utils";
import { CarProps, HomeProps } from "@types";
import { CarCard, Filter, Pagination, SearchBar } from "@components";
import { manufacturers, yearsOfProduction } from "@constants";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  return (
    <main className="sm:px-16 px-6 py-4">
      <SearchBar />

      <div className="flex max-md:flex-col md:justify-between max-md:items-start w-full pt-16">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-400">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="flex justify-start flex-wrap items-center gap-2 max-md:pt-10">
          <Filter title="Fuel" options={["Gas", "Electricity"]} />
          <Filter title="Manufacturer" options={manufacturers} />
          <Filter title="Year" options={yearsOfProduction} />
        </div>
      </div>

      <section className="flex flex-col w-full h-full">
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
          {allCars.map((car: CarProps) => (
            <CarCard
              model={car.model}
              make={car.make}
              mpg={car.highway_mpg}
              transmission={car.transmission}
              year={car.year}
              drive={car.drive}
              cityMPG={car.city_mpg}
            />
          ))}
        </div>

        <Pagination pageNumber={(searchParams.limit || 10) / 10} />
      </section>
    </main>
  );
}
