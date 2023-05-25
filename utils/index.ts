import { CarProps, FilterProps } from "@types";

const basePricePerDay = 50; // Base rental price per day in dollars
const mileageFactor = 0.1; // Additional rate per mile driven
const ageFactor = 0.05; // Additional rate per year of vehicle age

export const calculateCarRent = (city_mpg: number, year: number) => {
  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${
    window.location.pathname
  }?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();
  return result;
}

// Retrieve car data from localStorage
export const getCarsFromLocalStorage = (fuel = "", year = 2022) => {
  try {
    const carsJSON = localStorage.getItem("cars");
    if (carsJSON === null) {
      // If no data is found in localStorage, return an empty array
      return [];
    } else {
      // Parse the JSON data and return the array of cars
      const cars = JSON.parse(carsJSON);

      // Filter cars based on fuel and year if provided
      if (fuel !== "") {
        const filteredCars = cars.filter(
          (car: CarProps) => car.fuel_type === fuel && car.year === year
        );

        return filteredCars;
      }

      return cars;
    }
  } catch (error) {
    // If there is an error while retrieving data, handle it appropriately
    console.error("Error retrieving car data from localStorage:", error);
    return [];
  }
};

export const addCarToLocalStorage = (car: CarProps) => {
  console.log(car);

  try {
    const cars = getCarsFromLocalStorage();

    // Check if the car already exists in the cars array
    const isCarAlreadyExists = cars.some(
      (existingCar: CarProps) => existingCar.id === car.id
    );

    if (!isCarAlreadyExists) {
      // If the car doesn't exist, add it to the cars array
      cars.push(car);

      // Save the updated cars array to localStorage
      localStorage.setItem("cars", JSON.stringify(cars));

      console.log("Car added to localStorage:", car);
    } else {
      console.log("Car already exists in localStorage:", car);
    }
  } catch (error) {
    // If there is an error while adding the car, handle it appropriately
    console.error("Error adding car to localStorage:", error);
  }
};
