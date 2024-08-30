// import { IoIosEyeOff, IoIosEye } from "react-icons/io";

import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

export function PasswordField ({
  label,
  placeholder,
  register,
  error,
  errorMessage,

  
})  {

        const [open, setOpen] = useState(false);
 const ToggleOpen = () => setOpen(!open);

  return (
    <div className="">
      <label className="text-[#4C689E]">{label}</label>
      <div className="relative border rounded-md border-stone-200 p-[0.36rem]">
        <input
          type={!open ? "password" : "text"}
          placeholder={placeholder}
          {...register("password", { required: true })}
          className="border-none focus:border-none outline-none"
          autoComplete="current-password"
        />
        <span className="absolute right-2 top-2 cursor-pointer">
          {open ? (
            <IoIosEye
              className="cursor-pointer w-[2rem] h-[2rem] pb-[.8rem]"
              onClick={ToggleOpen}
            />
          ) : (
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={ToggleOpen}
            >
              <path
                d="M19.4 16.5L4.39999 1.5M9.19999 7.44157C8.82658 7.85326 8.59999 8.39403 8.59999 8.98631C8.59999 10.2761 9.67451 11.3217 11 11.3217C11.6111 11.3217 12.1689 11.0994 12.5926 10.7334M19.4388 11.3217C20.265 10.0848 20.6 9.07613 20.6 9.07613C20.6 9.07613 18.4154 2.1 11 2.1C10.5837 2.1 10.1839 2.12199 9.79999 2.16349M16.4 14.3494C15.0226 15.2281 13.2493 15.8495 11 15.8127C3.67692 15.693 1.39999 9.07613 1.39999 9.07613C1.39999 9.07613 2.45785 5.69808 5.59999 3.64332"
                stroke="#4169E1"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          )}
        </span>
        {error && <span className="text-white">{errorMessage}</span>}
      </div>
    </div>
  );
};
