import CarCard from "@components/CarCard";
import Filter from "@components/Filter";
import Pagination from "@components/Pagination";
import SearchBar from "@components/Searchbar";
import { manufacturers, yearsOfProduction } from "@constants";

interface Car {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

interface HomeProps {
  searchParams: FilterProps;
}

async function fetchCars(filters: FilterProps) {
  const {
    manufacturer = "",
    year = 2022,
    model = "",
    limit = 10,
    fuel = "",
  } = filters;

  const headers: HeadersInit = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
  });

  return (
    <main>
      <SearchBar />

      <div className='flex max-md:flex-col md:justify-between max-md:items-start w-full pt-16'>
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-400'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='flex justify-start flex-wrap items-center gap-2 max-md:pt-10'>
          <Filter title='Fuel' options={["Gas", "Electricity"]} />
          <Filter title='Manufacturer' options={manufacturers} />
          <Filter title='Year' options={yearsOfProduction} />
        </div>
      </div>

      <section className='flex flex-col w-full h-full'>
        <div className='grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
          {allCars.map((car: Car) => (
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
