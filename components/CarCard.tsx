import CustomButton from "./CustomButton";

interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
}

const CarCard = ({
  model,
  make,
  mpg,
  transmission,
  year,
  drive,
}: CarCardProps) => {
  const imaginApiKey = process.env.NEXT_PUBLIC_IMAGIN_API_KEY;

  return (
    <div className='group relative flex flex-col p-8 justify-center items-start text-black-400 bg-[rgba(59,60,152,0.02)] rounded-[40px]'>
      <h2 className='text-[22px] leading-[26px] font-bold'>
        {make.charAt(0).toUpperCase() + make.slice(1)}{" "}
        {model.charAt(0).toUpperCase() + model.slice(1)}
      </h2>

      <p className='flex py-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>
          $
        </span>
        42
        <span className='self-end text-[14px] leading-[17px] font-medium'>
          /day
        </span>
      </p>

      <img
        src={`https://cdn.imagin.studio/getimage?customer=${imaginApiKey}&make=${make}&modelFamily=${
          model.split(" ")[0]
        }&zoomType=fullscreen&modelYear=${year}`}
        alt='car model'
      />

      <div className='flex w-full pt-6 h-[85px]'>
        <div className='flex w-full h-[65px] justify-between text-[#747A88]'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <img
              src='/steering-wheel.svg'
              className='w-[20px] h-[20px]'
              alt='steering wheel'
            />
            <p className='text-[14px] leading-[17px]'>
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <img src='/tire.svg' className='w-[20px] h-[20px]' alt='seat' />
            <p className='text-[14px] leading-[17px]'>{drive.toUpperCase()}</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <img src='/gas.svg' className='w-[20px] h-[20px]' alt='seat' />
            <p className='text-[14px] leading-[17px]'>{mpg} MPG</p>
          </div>
        </div>
      </div>

      <div className='hidden group-hover:flex absolute bottom-10 mx-6 right-0 left-0 z-10'>
        <CustomButton
          title='Rent Now'
          containerStyles='w-full py-[16px] rounded-lg bg-gradient-to-r from-[#5E60C1] from-[0.78%] to-[#7E80CD] to-[99.38%]'
          textStyles='text-white text-[14px] leading-[17px] font-bold'
          rightIcon='/right-arrow.svg'
        />
      </div>
    </div>
  );
};

export default CarCard;
