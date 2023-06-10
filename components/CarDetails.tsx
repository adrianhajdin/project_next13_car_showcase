import { Fragment, useState, useEffect } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { CarProps } from "@types";
import { generateCarImageUrl } from "@utils";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  const [carImages, setCarImages] = useState<string[]>([]);

  useEffect(() => {
    const images = ["angle", 29, 33, 13].map((num) =>
      generateCarImageUrl(car, num.toString())
    );

    setCarImages(images);
  }, [car]);

  const handleClick = (index: number) => {
    setCarImages((prev) => {
      const clickedImage = prev[index];
      prev.splice(index, 1);
      prev.unshift(clickedImage);
      return [...prev];
    });
  };
  
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-out duration-300'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                  <button
                    type='button'
                    className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                    onClick={closeModal}
                  >
                    <Image
                      src='/close.svg'
                      alt='close'
                      width={20}
                      height={20}
                      className='object-contain'
                    />
                  </button>

                  <div className='flex-1 flex flex-col gap-3'>
                    <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                      <Image src={carImages[0]} alt='car model' fill priority className='object-contain' />
                    </div>

                    <div className='flex gap-3'>
                      {carImages.length > 0 &&
                        carImages.slice(1).map((image, index) => (
                          <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg cursor-pointer">
                            <Image
                              src={image}
                              alt="car model"
                              fill
                              priority
                              className="object-conatin"
                              onClick={() => handleClick(index + 1)}
                            />
                          </div>
                        ))}
                  </div>

                  <div className='flex-1 flex flex-col gap-2'>
                    <h2 className='font-semibold text-xl capitalize'>
                      {car.make} {car.model}
                    </h2>

                    <div className='mt-3 flex flex-wrap gap-4'>
                      {Object.entries(car).map(([key, value]) => (
                        <div className='flex justify-between gap-5 w-full text-right' key={key} >
                          <h4 className='text-grey capitalize'>
                            {key.split("_").join(" ")}
                          </h4>
                          <p className='text-black-100 font-semibold'>
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
   );
};

export default CarDetails;
