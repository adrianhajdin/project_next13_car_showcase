"use client";

import Image from "next/image";
import { useState } from "react";

import { calculateCarRent } from "@utils";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";
import { CarProps } from "@types";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false);

  const imaginApiKey = process.env.NEXT_PUBLIC_IMAGIN_API_KEY;

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>

        <Image
          src={!isLiked ? "/heart-outline.svg" : "/heart-filled.svg"}
          width={24}
          height={24}
          alt="heart"
          className="object-contain cursor-pointer mt-0.5"
          onClick={() => setIsLiked(!isLiked)}
        />
      </div>

      <p className="car-card__price">
        <span className="car-card__price-dollar">$</span>
        {carRent}
        <span className="car-card__price-day">/day</span>
      </p>

      <div className="car-card__image">
        <Image
          src={`https://cdn.imagin.studio/getimage?customer=${imaginApiKey}&make=${make}&modelFamily=${
            model.split(" ")[0]
          }&zoomType=fullscreen&modelYear=${year}`}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="car-card__icon-container">
          <div className="car-card__icon">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="car-card__icon-text">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={openModal}
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModal={closeModal} car={car} />
    </div>
  );
};

export default CarCard;
