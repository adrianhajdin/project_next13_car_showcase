"use client";

import { MouseEventHandler } from "react";

interface ButtonProps {
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  btnType,
  containerStyles,
  textStyles,
  title,
  rightIcon,
  handleClick,
}: ButtonProps) => (
  <button
    type={btnType || "button"}
    className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`text-button-b ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className='absolute right-5 ml-2'>
        <img src={rightIcon} alt='arrow_left' />
      </div>
    )}
  </button>
);

export default Button;
